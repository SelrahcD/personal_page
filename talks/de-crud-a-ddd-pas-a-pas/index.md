---
layout: talk
title: De CRUD à DDD pas à pas
description: "Migrating an existing application to something else can be a tricky business. Lack of tests, unclear business rules and modeling, and current tools preventing us from doing the changes we want...

In this talk, I show some of the steps we took to migrate a CRUD-generated back office to an application using DDD principles and pattern, while introducing tests and using CQRS to keep existing views."
tags:
  - talk
  - refactoring
  - testing
  - approval testing
  - DDD
slideshare: E0V4LbtpNz2KOf
youtube: bXTasFb6PiA
preview_image: preview.jpg
---

Start-ups need to go fast; they have to create something as soon as possible to prove there is some product-market fit. Rapid Application Development, use of CRUD frameworks can speed things a lot.

Unfortunately, after a while, once the business has grown, processes are better understood, managing a business with glorified spreadsheets is not as efficient as it could be. It's probably time to put the logic back inside the software.

How can we do so while keeping our application running and avoiding the big rewrite?

In this talk, I share some of the ideas and tools we've used in a migration project, from a CRUD-generated back-office application to an application using DDD concepts and patterns. I'm talking about understanding the needs, introducing tests thanks to approval testing, using interfaces to introduce roles to test our model before committing to migrating the database, and how CQRS helped us keep our existing views despite introducing a new model.