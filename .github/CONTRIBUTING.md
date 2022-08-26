# Contributing to the Community Wiki

Each & every project we build and/or maintain has been a possibility due to the
community efforts. And as such without help from the community itself, the
projects would've been a distant dream only! As such, while we welcome all sorts
of contributions to developing our community website, we ask the contributors to
abide by certain rules & guidelines. These guidelines help us ensure:

1. Development practices are uniform.
2. Bug reports follow a standard procedure which makes it easier to debug &
   resolve certain issues quicker.
3. Submitting bug fixes, patches, feature requests through [Pull Requests (PRs)][1].
4. The details & examples to share when proposing a new website enhancement or
   feature request.

As such this current document lists down such guidelines in complete detail
which every contributor should follow while contributing to the project.

Do note, the statements detailed in this document aren't set in stone &
individual contributors are expected to use their best judgement when
developing and/or contributing to the project. If you ever feel, certain
portions of this document could use a rephrasing? Please do not hesitate
to report it to us & open a PR referencing it!

## Code of Conduct

First of, our community welcomes people from all sorts of areas & expertise with
varying years of experience. As such we ask you to be civil when interacting
with another community be it on GitHub or elsewhere.

To enforce a civil & mature engagement among community members we drafted the
[Code of Conduct][2]. If you find anyone breaking the T&Cs of the aforementioned
document please report us about the incident on over our email -
`contact.developersindia@gmail.com`.

## Too Long, Didn't Read, But I've a Question

> **Note:** [Please don't file an issue to ask a question.][3] You'll get faster
results by using the resources below.

- Check the [Issue][4]/[Discussion][5] threads to see if your query already
  exists or not!
- If it's a quick short answer which you believe one of the admin/maintainers
  can respond to real quick, our DMs are open to you.
- Join our [Discord server][6] & have a great chat there! (**Don't forget to
  read the rules & guidelines there as well!**)

## How to Contribute to the Project

### Bug Reports Using GitHub's Issue Tracker

We use GitHub issues to track public bugs, weird features, broken URLs, design
discrepancies & so on. More specifically, any thing out of the ordinary which
shouldn't really exist in a website is tracked on our bug tracker.

You can report a bug by [opening a new issue][7], it's that easy! But before
reporting an issue, please put in some effort & identify if similar reports
have already been created by a previous individual.

> **Note:** If you find a **Closed** issue that seems like it is the same thing
that you're experiencing, open a new issue and include a link to the original
issue in the body of your new one.

### Before Submitting a Bug Report

- Check if the content is being delivered to your browser. Sometimes a quick
  Hard Refresh(**Shift + Ctrl + R**) might resolve the issue.
- Determine if such a bug report has already been reported earlier or not.
- Take a screenshot of the bug if possible & take note of the Browser details.

### How to Submit a Good Report

**Great Bug Reports** tend to have:

- **Use a clear & descriptive title** to identify the issue & for obvious SEO
  reasons.
- **Describe the exact steps which reproduce the problem** in as many details as
  possible.
- **Provide specific examples to demonstrate the steps**. Include links to files
  or GitHub projects, or copy/pasteable snippets, which you use in those
  examples. If you're providing snippets in the issue, use [Markdown code
  blocks][[8].
- **Describe the behaviour you observed after following the steps** and point
  out what exactly is the problem with that behaviour.
- **Explain which behaviour you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the
  described steps and clearly demonstrate the problem. If you use the keyboard
  while following the steps, **record the GIF with this tool**:
  [ShareX][9].
- **If the problem wasn't triggered by a specific action**, describe what you
  were doing before the problem happened and share more information using the
  guidelines below.

Project maintainers & authors _love_ thorough bug reports!

### Suggesting Enhancements

All projects maintained under the [developersIndia][10] banner are free &
open-source. Hence we welcome public opinion on features & enhancements!
Further, this section of the document will help you understand how to draft a
detailed enhancement suggestion. Following these guidelines helps maintainers
and the community understand your suggestion :pencil: and find related
suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list][11] as you
might find out that you don't need to create one. When you are creating an
enhancement suggestion, please [include as many details as possible][12].
Fill in [the template][13], including the steps that you imagine you would take
if the wiki entry you're requesting existed.

### Your First Code Contribution

Unsure where to begin contributing to the project? You can start by looking
through these `good-first-issues` and `help-wanted` issues:

- [Good First Issues][14] - issues which should only require a few lines of
  code, and a test or two.
- [Help Wanted Issues][15] - issues which should be a bit more involved
  than `good-first-issues` issues.

Both issue lists are sorted by the total number of comments. While not perfect,
the number of comments is a reasonable proxy for an impact a given change will have.

### Local Development

Before you can write your first ever contribution to the project, you need to
have a development environment setup locally on your machine. As such this
current section will document the steps & procedure you'll need to take for
setting up the development environment.

**Prerequisite Tools Necessary for Local Development**:

Before proceeding ahead with your contributions, please read
the instructions in this section thoroughly. And you'll need to have the
following tools installed locally on your system to develop the website. 

- [`Node.js`][16]
- [`git`][17]

Once installed you can verify if the software are working properly or not by
invoking the following commands;

```shell
# Verify the mdbook CLI tool is installed on your system
node --version
# Example output: version v18.7.0

# Verify npm is installed & available
npm --version
# Example output: 8.15.0

# Verify git exists & works as expected
git --version
# Example output: git version v2.4.21
```

With the necessary prerequisite tools installed & verified, you should now fork
the project. if you've never forked a GitHub project before, check the [official
GitHub docs][20] or refer to [this YouTube video][21].

This forked repository will be your [remote][22] copy of the soure code. And
you're free to do whatever you wish to it without ever worrying about messing
things up in the upstream (_as in the main_) repository. But to be even safer,
its particularly recommended to create [`git` branches][23].

That said, the next few sections will help you further on setting up the
project for local development.

**Setting Up the Project for Local Development**

Once you've access to a personal fork of the project, you're free to make
changes to it before sharing a PR with us! So let's see how you can get started
with writing your first line of code for the project!

1. Clone your forked remote repository to your local development machine using;

   ```shell
   git clone git@github.com:<YOUR_GITHUB_NAME/website>
   ```

2. With the source code downloaded to your local machine its now time to
   install the dependencies for the project. So change in to the project
   directory & run the following command.

   ```shell
   # This will install all the project dependencies locally.
   npm install
   ```

3. Once the dependencies are installed, check if the project works as expected.

   ```shell
   # This will start a development version of the website & will be accessible
   # in this URL - http://localhost:3000
   npm run dev
   ```

If all goes well & good, you should now see the development version of the
website in this URL - [http://localhost:3000](http://localhost:3000). And if
you don't see a website, please reach out to us & we'll help you figure out
something.

**NOTE**: As mentioned earlier, even if you fork the repository, its always
best practice to create a `git` branch (_refer to the documentations for more
information_). You can create a branch by running this command -
`git checkout -b <BRANCH_NAME>`. Once you've worked on your branch, push the
commits to your forked remote repository & then create a PR. With the PR
created give us moderators some time to review it. And if wait for
approval/feedback before it can be merged to the `main` branch of the repository.

## Licensing Terms & Conditions (T&Cs)

We welcome all sorts of contributions to the project, be it triaging issues,
reporting bugs & breaking changes and/or even taking up maintenance
responsibilities. And all contributions to the project are performed under a
voluntary basis for the developersIndia community.

As such to protect the interests of the contributors of the project, we're
distributing the project under the MIT License. To read & learn about the
terms & conditions (T&Cs) of the license, please check the [LICENSE][25]
document.

That said, all contributions to the project will be distributed under the T&Cs
of the MIT License as well. We also assume, by contributing to the project,
you're then accepting the T&Cs of the open-source license we distribute our
project under.

If you feel there's something missing and/or the T&Cs are too restricted (or
otherwise) please report it to us & open a PR explaining your reasoning. We'll
gladly welcome your PR as long as the changes to the T&Cs are justifiable
enough.

## Triaging Issues, Discussions & Pull Requests

We maintain the project in this repository on a voluntary basis outside work
hours. As such, we appreciate each & every helping hands our contributors
provide us. One task we desparately need help with is triaging issues,
discussions & PRs. And believe it or not, this is one task which is extremely
appreciated by the maintainers, so if you can contribute responding and/or
triaging it be a massive help for us!

That said, if you would like to contribute to the project by...

1. Triaging through issues & helping the maintainers identify the type of issue/PRs.
2. Respond to contributors with their queries & discussions.
3. Marking bad PRs as spam and/or duplicate issue threads as `duplicate`.

...then this section of the document will guide you through.

That said, we track:

- Bugs, feature requests & such through [Issue threads][4].
- Discussions on breaking changes, enhancements & feature requests through
  [Discussion threads][5].
- And source code updates and/or changes through [Pull Requests][26].

Issue threads & PRs are categorized with the following labels:

| Issue Labels       | Desciption                                                                   |
| ------------------ | ---------------------------------------------------------------------------- |
| `bug`              | Something isn't working                                                      |
| `dependencies`     | Pull requests that update a dependency file                                  |
| `documentation`    | Improvements or additions to documentation                                   |
| `duplicate`        | This issue or pull request already exists                                    |
| `enhancement`      | New feature or request                                                       |
| `good first issue` | Good for newcomers                                                           |
| `help wanted`      | Extra attention is needed                                                    |
| `invalid`          | This doesn't seem right                                                      |
| `question`         | Further information is requested                                             |
| `wontfix`          | This will not be worked on                                                   |

More such labels will be added & updated as & when required.

You can triage through specific categories of issue threads or PRs if that's
what you're looking for. For example, if you're a first-time contributor to the
project, you could look into issue threads labeled with [`good first issue`][27]
or [`help wanted`][28].

**NOTE**: If you notice we missed adding someone (which could include you as
well) to [the list of contributors][29], please add a comment on the lines of;

```text
<!-- remove the square brackets and choose appropriate words -->
@all-contributors please add @user for [code, design, bug, infra, doc, tool, ideas]
```

Additionally, please take a look the [All Contributors docs][30] for further
information on how to use it.

## References

The contributing guidelines detailed in this document pertains only to this one
specific project which is hosted in this repository. More specifically, all the
guidelines detailed in the document are only applicable towards development
and/or maintenance of the
[developersIndia website](https://github.com/developersIndia/website).

If you would like to read more about our community guidelines, please find them
on the following resources:

- [r/developersIndia | Reddit](https://www.reddit.com/r/rdevelopersIndia)
- [developersIndia | Discord](https://discord.gg/b4YYdyYBGH)
- [developersIndia | GitHub](https://github.com/developersIndia/.github/blob/main/CODE_OF_CONDUCT.md)

_**HAPPY CONTRIBUTING!**_ 😄

<!-- Reference Links -->
[1]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[2]: https://github.com/developersIndia/.github/blob/main/CODE_OF_CONDUCT.md
[3]: https://blog.atom.io/2016/04/19/managing-the-deluge-of-atom-issues.html
[4]: https://github.com/developersIndia/website/issues
[5]: https://github.com/developersIndia/website/discussions
[6]: https://discord.gg/b4YYdyYBGH
[7]: https://github.com/developersIndia/website/issues/new/choose
[8]: https://www.markdownguide.org/basic-syntax/#code
[9]: https://getsharex.com
[10]: https://github.com/developersIndia
[11]: #before-submitting-an-enhancement-suggestion
[12]: #how-do-i-submit-a-good-enhancement-suggestion
[13]: https://github.com/developersIndia/website/issues/new?assignees=Jarmos-san%2CBhupesh-V&labels=enhancement&template=feature_request.yml&title=%5BFEATURE+REQUEST%5D%3A+
[14]: https://github.com/developersIndia/website/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22
[15]: https://github.com/developersIndia/website/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
[16]: https://nodejs.org
[17]: https://git-scm.com
[20]: https://docs.github.com/en/get-started/quickstart/fork-a-repo
[21]: https://youtu.be/f5grYMXbAV0
[22]: https://www.git-tower.com/learn/git/glossary/remote
[23]: https://git-scm.com/docs/git-branch
[24]: https://git-scm.com/docs/githooks#_pre_commit
[25]: https://devsindia-wiki.netlify.app
[26]: https://rust-lang.github.io/mdbook
[27]: ../LICENSE
[28]: https://github.com/developersIndia/website/pulls
[29]: https://github.com/developersIndia/website/labels/good%20first%20issue
[30]: https://github.com/developersIndia/website/labels/help%20wanted
[31]: https://github.com/developersIndia/website#-contributors
[32]: https://allcontributors.org/docs/en/overview
