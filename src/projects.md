---
layout: page
title: Projects
permalink: /projects/
---

{% rendercontent "project_grid" %}
  {% for my_project in site.data.projects %}
    {% render "project", project: my_project %}
  {% endfor %}
{% endrendercontent %}
