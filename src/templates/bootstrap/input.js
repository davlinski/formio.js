export default {
  form: `
{% if (component.prefix || component.suffix) { %}
<div class="input-group">
{% } %}
{% if (component.prefix) { %}
<div class="input-group-prepend">
  <span class="input-group-text">
    {{component.prefix}}
  </span>
</div>
{% } %}
<{{input.type}} 
  ref="{{input.ref ? input.ref : 'input'}}" 
  {% for (var attr in input.attr) { %}
  {{attr}}="{{input.attr[attr]}}"
  {% } %}
>{{input.content}}</{{input.type}}>
{% if (component.suffix) { %}
<div class="input-group-append">
  <span class="input-group-text">
    {{component.suffix}}
  </span>
</div>
{% } %}
{% if (component.prefix || component.suffix) { %}
</div>
{% } %}
`,
};