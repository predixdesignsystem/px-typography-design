/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style>
    /**
     * Font weights
     */

    .weight--normal {
      font-weight: 400!important;
    }

    .weight--bold {
      font-weight: 600!important;
    }
    </style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-typography-design" description="The Predix UI Typography module defines styles for basic typography." layer="base" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-colors-design&quot;,
    &quot;https://github.com/PredixDev/px-defaults-design&quot;,
    &quot;https://github.com/PredixDev/px-mixins-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Font Weight" choose-with="dropdown" choices="[
    &quot;normal (default)&quot;,
    &quot;bold&quot;
  ]" default-choice="normal (default)">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<span class\$="{{typeClasses}}">This is GE Inspira Sans!</span>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- Normal -->
<span class="weight--normal">Normal Text</span>


<!-- Bold -->
<span class="weight--bold">Bold Text</span>
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-typography-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.importCode = this._importCode();
    this.typeClasses = this._typeClasses();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _typeClasses : function() {
    var opts = this.selectedOptions || {};
    if (opts["Font Weight"] === "normal (default)")    return "weight--normal";
    if (opts["Font Weight"] === "bold")            return "weight--bold";
  },

  _importCode : function() {
    return '@import "px-typography-design/_base.typography.scss";';
  }
});
