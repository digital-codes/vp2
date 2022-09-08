---
date: "2022-04-26"
head:
  - - meta
    - name: foo
      content: yaml array syntax
  - [meta, { name: bar , content: square brackets syntax }]
pageClass: zoomable
---



# Hello VuePress

## Intro
Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? 

<!-- more -->

[33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

## Cont

### FontAwesome Icons

User select from [FA repo](https://github.com/FortAwesome/vue-fontawesome/tree/v6-readme-3x#installation)

Size can be sm, md, lg, xl. There are more options see above

SVG solid icons <font-awesome-icon icon="user-secret" size="md"/>
or <font-awesome-icon :icon="['fas', 'user-secret']" />

Two types of calenders: <font-awesome-icon icon="fa-solid fa-calendar-days" /> <font-awesome-icon icon="fa-regular fa-calendar-days" />

<!-- Don't forget to bind the property with ":" (we forget all the time!) -->
SVG brand icons <font-awesome-icon :icon="['fab', 'font-awesome']"  size="xl"/>





### CoreIcons
<CIcon icon="cilCalendar" size="xl"/>
<CIcon icon="cibGithub" size="xl"/>


praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.


## Oruga

### Calendar
<OrugaDatePick></OrugaDatePick>



# Images


## Not zoomable

![Image](/images/img.png)

## Zoomable

<img src="/images/img.png" alt="123" class="zoomable">


# CSS
change content witdh in node_modules/@vuepress/theme-default/lib/client/styles/vars.scss

```
:root {
  ...
  /*
  --content-width: 740px;
  --homepage-width: 960px;
  */
  --content-width: 940px;
  --homepage-width: 1160px;
```

<!--

## Oruga

### Calendar
<OrugaDatePick></OrugaDatePick>

-->

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
<CharT1></CharT1>

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
