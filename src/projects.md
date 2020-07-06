---
layout: page
title: Projects
permalink: /projects/
---

Hi there!

{% for project in site.data.projects %}
  {{ project.name }}
{% endfor %}

