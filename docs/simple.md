---
date: "2022-09-08"
title: Simple UI Elements
head:
  - - meta
    - name: simple
      content: custom elements simple version

---



# Simple Elements

## Intro
Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? 

## Simple Card

<CardComp>
    <template #header>
        Here might be a page title
    </template>
    <template #default>
        A paragraph for the main content.
        And another one.
        The master branch is a snapshot of the latest release. Submit your PR in the develop branch
        Include screenshots or animated GIFs in your pull request whenever needed (if visual changes)
        It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging
        DO NOT commit the lib and dist folder, use it only for testing on your end
        If adding new feature:
        Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on i
    </template>
    <template #footer>
        Here's some contact info
    </template>
</CardComp>

## Markdown Card

<MdCard
  hdr="Here might be a page title"
  ftr="Here's some contact info"
  src="## A paragraph for the main content.
\
And another one.
\
The master branch is a snapshot of the latest release. Submit your PR in the develop branch
Include screenshots or animated GIFs in your pull request whenever needed (if visual changes)
It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash
it before merging
\
DO NOT commit the lib and dist folder, use it only for testing on your end\
\
If adding new feature:
\
Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have
it greenlighted before working on i"
  >
</MdCard>

## Markdown Card no Footer

<MdCard
  hdr="Here might be a page title"
  src="## A paragraph for the main content.
\
And another one.
\
The master branch is a snapshot of the latest release. Submit your PR in the develop branch
Include screenshots or animated GIFs in your pull request whenever needed (if visual changes)
It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash
it before merging
\
DO NOT commit the lib and dist folder, use it only for testing on your end\
\
If adding new feature:
\
Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have
it greenlighted before working on i"
  >
</MdCard>


## Card Container

<FlexContainer>
</FlexContainer>


### Coreui  Table

With some extra effort almost as nice, and working

<CoreTable 
  stickyIndex="true"
  stickyHeader="true"
></CoreTable>


## Leaflet map
<GeoMap>
</GeoMap>

## Chart 1
<CharT1S></CharT1S>

<!-- 
Chart5 needs client-only due to architecture of echarts-gl
-->

## Chart 5
<ClientOnly>
<CharT5></CharT5>
</ClientOnly>


## Chart 6
<CharT6></CharT6>


<!-- 
chart 7 need client-only due to usage of "window"
in wordcloud
-->

## Chart 7
<ClientOnly>
<CharT7></CharT7>
</ClientOnly>





# Done
nothing
