---
title: Detect database changes with spring boot and JPA
description: Working with JPA EventListener and components from spring boot
img: https://images.unsplash.com/photo-1533750204176-3b0d38e9ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
alt: database image
author: 
  name: Nick
  bio: I am a software developer who spends most of his spare time working on open source projects. I also like taking pictures and playing table football.
  img: https://avatars1.githubusercontent.com/u/544436?s=460&u=f229b588fbb1b79aab2ab6f029cec5e6e7909af1&v=4
tags: 
  - Spring
  - Java
createdAt: 2020-11-22
updatedAt: 2020-11-22
---

## Detect database changes with spring boot and JPA

Today I had to implement a change logging system for an application. The most changes to log came with UPDATE commands to the database. The idea: detect UPDATE commands by JPA and notify instead of place method-calls all over the code.

Fortunately Spring Boot and JPA provides some Entity-Lifecycle-Listeners:

```java
@EntityListeners(AuditTrailListener.class)
@Entity
public class User {
    //...
}

public class AuditTrailListener {
  private static Log log = LogFactory.getLog(AuditTrailListener.class);
  
  @PrePersist
  @PreUpdate
  @PreRemove
  private void beforeAnyUpdate(User user) {
      log.info("add/update/delete complete for user: " + user.getId());
  }
  
  @PostPersist
  @PostUpdate
  @PostRemove
  private void afterAnyUpdate(User user) {
      log.info("[USER AUDIT] add/update/delete complete for user: " + user.getId());
  }
  
  @PostLoad
  private void afterLoad(User user) {
      log.info("[USER AUDIT] user loaded from database: " + user.getId());
  }
}
```
[source](https://www.baeldung.com/jpa-entity-lifecycle-events)


But for me it was not enough. My AuditTrailListener should be an Spring Boot class annotated with @Component. This together doesn't work. After some experiments I realized that JPA and Spring instantiate it's own objects of the Listener.

On stackoverflow.com I found another way to get my desired result:

```java
@Component
public class MyEventListener implements PreInsertEventListener {
  @Autowired
  private EntityManagerFactory entityManagerFactory;

  @PostConstruct
  private void init() {
      SessionFactoryImpl sessionFactory = entityManagerFactory.unwrap(SessionFactoryImpl.class);
      EventListenerRegistry registry = sessionFactory.getServiceRegistry().getService(EventListenerRegistry.class);
      registry.getEventListenerGroup(EventType.PRE_INSERT).appendListener(this);
  }

  @Override
  public boolean onPreInsert(PreInsertEvent preInsertEvent) {
      return false;
  }
}
```
[source](https://stackoverflow.com/a/45448865/3912144)

The EntityManagerFactory has an ServiceRegistry which can be extended with custom EventListeners. The example shows the PreInsertEvent, but there are all Pre and Post Insert/Update/Delete events ready for you.
