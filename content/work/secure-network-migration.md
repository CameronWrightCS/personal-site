+++
title = "Moving 50+ repositories to a secure network"
description = "Led two developers to move a 50+ repository, 25+ developer project to a secure network, rebuilding its CI/CD on the way and finishing ahead of schedule."
weight = 1

[extra]
abstract = "A project with more than 50 repositories and 25 developers had to move to a secure network. I led two developers through the move, wrote most of its 60+ merge requests, rebuilt its GitLab CI/CD pipelines, and wrote the onboarding guide every developer used. We finished ahead of schedule."
keywords = "GitLab CI/CD, GitLab Runner, migration, technical leadership, onboarding"
+++

## Problem

The project had more than 50 repositories and more than 25 developers. All of it had to move to a secure network: the code, the GitLab CI/CD pipelines that built and tested it, and each developer's setup.

Pipelines written for the old environment would not simply run in the new one. Every developer also needed a working setup on the new network before they could get back to work. Partway through, the senior technical lead went on leave.

## Approach

I was the feature lead, with two developers on my team. I implemented the core changes, wrote most of the project's 60+ merge requests, and supported nearly all of the rest.

In the new environment, I rebuilt the GitLab CI/CD pipelines, set up a GitLab Runner, created and enforced repository rules, and fixed build issues until every migrated project worked again.

I also wrote the onboarding guide: virtual machine setup, environment configuration, secure access, and tooling. Every developer used it to get set up. As the team moved over, I answered questions and troubleshot problems so they could keep working.

While the senior technical lead was on leave, I kept the migration on track and reported its status to stakeholders.

## Result

The migration finished ahead of schedule. Every migrated project was fully working in the new environment, and every developer got set up with the guide.

Table 1: The migration in numbers.

| Measure                              |             Value |
|:-------------------------------------|------------------:|
| Repositories moved                   |               50+ |
| Developers onboarded                 |               25+ |
| Merge requests (most written by me)  |               60+ |
| Developers I led                     |                 2 |
| Finish                               | Ahead of schedule |
