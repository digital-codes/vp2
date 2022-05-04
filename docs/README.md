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

### MDIcons
<menu-icon />
<calendar-icon class="icon-2x"/>

### CoreIcons
<CIcon icon="cilCalendar" size="xl"/>
<CIcon icon="cibGithub" size="xl"/>
<CIcon icon="cibVueJs" size="xl"/>



praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

# Images


## Not zommable

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

## Oruga

### Calendar
<OrugaTest></OrugaTest>

### Oruga  Table
Looks nice  with sticky header and index but 
**Not working properly on page exit**

<OrugaTable></OrugaTable>

### Coreui  Table
Not so nice, but working
<CoreTable></CoreTable>


## Leaflet map
<GeoMap>
</GeoMap>

## Chart 1
<Chart1></Chart1>

## Chart 5
<Chart5></Chart5>

## Chart 6
<Chart6></Chart6>

## Chart 7
<Chart7></Chart7>

# Done
nothing
