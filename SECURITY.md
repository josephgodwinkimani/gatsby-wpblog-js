# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |


## Before you begin

While engaging in the vulnerability disclosure process, please keep this 
in mind: _no software is perfect_. 

Software is written by people (at least today), and people sometimes make mistakes. 
This is true for closed-source (proprietary) software as well as open source software (OSS). 
This problem can be more challenging for open source software due to the factors that make 
OSS so powerful: highly distributed development by multiple contributors. At some point in 
the project lifecycle, someone – a user, a contributor, a security researcher, and likely 
the reader of this guide – will find a vulnerability that affects the security and usefulness 
of the project. Applying this guide will help everyone involved to be prepared to respond 
quickly and effectively.

## Reporting a Vulnerability

> Congratulations! You found a security vulnerability

1. Publicly request a security contact using an issue tracker
2. Reach out to the project maintainer, owner, or most active contributors via email, 
social media, or the project’s real-time chat system

### Provide Useful Information

Your vulnerability report should have enough vulnerability details in it so the maintainer can 
reproduce the issue themselves. Be sure to include any references as well. Some questions you 
should answer in your report include:

* What problem did you find?
* What versions do you believe are vulnerable?
* What is the vulnerable product, package, or project?
* What steps did you take to find the vulnerability?
  * Include any specific software and hardware requirements needed to reproduce the vulnerability.
  * If you have a proof-of-concept (POC) or example exploit, include it after you have established a 
  secure channel to the maintainer or project security members.
* What lines in the source code of the project are vulnerable?
  * Are you able to identify the root cause?
  * Can you identify when this was introduced?
* What is the impact if exploited?
  * Can you estimate the severity ([CVSSv3.1](https://www.first.org/cvss/v3.1/specification-document)) 
  score?  
  Be aware that the maintainer/project may revise your scoring since they are experts in the code.  
  This is an opportunity to educate them on how the flaw works and talk through impacts with them.

* Are you aware if  this is actively being exploited?
* Can you suggest any remediations or mitigations?  This will almost always help speed the resolution 
of the vulnerability.  Patches are always welcome.
* Do you have any time constraints that affect this disclosure (submitted to a conference, existing 
expected date of disclosure, personal disclosure policy)?
* Has this information been shared with anyone else, and if so, when and how?
* Are you willing to meet virtually with the maintainer to demonstrate what you’ve found?

An example/template vulnerability report [template](https://github.com/ossf/oss-vulnerability-guide/blob/main/templates/notifications/disclosure.md) 
is included in the [appendix](#templatesexamples) below

## Disclosure

Although vulnerability disclosure has been normalized significantly over the past decade, there are still 
some parties who may resist disclosure of the vulnerabilities in their software. This may be because they 
are new to the process or do not have the correct capabilities or resources to manage a vulnerability disclosure 
process. Always assume positive intent when reporting to open source maintainers, especially in the light that 
they may be unpaid volunteers or just someone that loves writing code and may not have the training and background 
to understand what is being reported to them.

### Properly setting expectations for the disclosure

When going into vulnerability disclosure, it’s advisable to declare your own goals and expectations **early** so 
that all parties understand the boundaries of the engagement.

While most vulnerability disclosures go well, sometimes maintainers are unresponsive, there are disagreements about 
the vulnerability's impact, or the maintainers may prioritize other work over fixing a vulnerability. Stating an 
up-front vulnerability disclosure timeline can set clear expectations around how and when disclosure will occur. 
These clear deadlines will help ensure that the maintainer has a reasonable amount of time to fix the vulnerability, 
that users aren’t left unaware for an extended period of time, and that a fix is released as soon as possible.

#### A note about software development

Typically, software developers will follow a Software Development Life-cycle ([SDL](https://snyk.io/learn/secure-sdlc/)) 
model, consisting of at least some of the following phases that lead from one to the other. The process is usually 
iterative and cycles back from the bottom to the top:

* **Gathering requirements** - identify the problem(s) and prioritize.
* **Design** - Analyze the gathered requirements and understand how to fulfill them.
* **Development** - Write the code that implements the design, review and approve it.
* **Verification** - Verify that the code solves the problem without creating new issues or regressing existing functionality.
* **Release** - Build and package the new code so users can leverage the solution to their goals.
* **Maintenance/ Monitoring/ Collect feedback** - Maintain the solution over time while collecting feedback that forms the 
basis for the next iteration’s requirements.

In general, collaborating externally as a vulnerability finder with an open source project team will occur during the final 
maintenance/collecting feedback phase, and the intent is that the vulnerability is prioritized high so that the next cycle 
will include the fix for it.
