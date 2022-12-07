## Commit Rules

Allowed commit types:


* **feat** – a new feature is introduced with the changes
* **fix** – a bug fix has occurred
* **chore** – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
* **refactor** – refactored code that neither fixes a bug nor adds a feature
* **docs** – updates to documentation such as a the README or other markdown files
* **style** – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
* **test** – including new or correcting previous tests
* **perf** – performance improvements
* **ci** – continuous integration related
* **build** – changes that affect the build system or external dependencies
* **revert** – reverts a previous commit

**Good**

```
feat: improve performance with lazy load implementation for images
chore: update npm dependency to latest version
#1 docs: added instructions for deployment on debian
```

**Bad**

```
improve performance with lazy load implementation for images
update npm dependency to latest version
#1 added instructions for deployment on debian
```
