<template>
  <gofr-element :edit="edit" :loading="false">
    <template #form>
      <v-textarea :error-messages="errors" @change="errors = []" :disabled="disabled" :label="$t(`App.fhir-resources-texts.${display}`)" v-model="value" outlined hide-details="auto" :rules="rules" dense>
        <template #label>{{ $t(`App.fhir-resources-texts.${display}`) }} <span v-if="required" class="red--text font-weight-bold">*</span></template>
      </v-textarea>
    </template>
    <template #header>
      {{$t(`App.fhir-resources-texts.${display}`)}}
    </template>
    <template #value>
      {{value}}
    </template>
  </gofr-element>
</template>

<script>
import GofrElement from "../gofr/gofr-element.vue"

export default {
  name: "fhir-text",
  props: [ "field", "label", "min", "max", "path", "edit", "sliceName", "slotProps", "base-min", "base-max", "readOnlyIfSet",
    "constraints"],
  components: {
    GofrElement
  },
  data: function() {
    return {
      source: { path: "", data: {} },
      value: "",
      qField: "valueText",
      disabled: false,
      errors: [],
      lockWatch: false
    }
  },
  created: function() {
    //console.log("CREATE STRING",this.field,this.slotProps)
    this.setupData()
  },
  watch: {
    slotProps: {
      handler() {
        //console.log("WATCH STRING",this.field,this.path,this.slotProps)
        if ( !this.lockWatch ) {
          this.setupData()
        }
      },
      deep: true
    }
  },
  methods: {
    setupData() {
      if ( this.slotProps && this.slotProps.source ) {
        this.source = { path: this.slotProps.source.path+"."+this.field, data: {} }
        if ( this.slotProps.source.fromArray ) {
          this.source.data = this.slotProps.source.data
          this.value = this.source.data
          this.lockWatch = true
          //console.log("SET value to ", this.source.data, this.slotProps.input)
        } else {
          let expression = this.$fhirutils.pathFieldExpression( this.field )
          this.source.data = this.$fhirpath.evaluate( this.slotProps.source.data, expression )
          //console.log("STR FHIRPATH", this.slotProps.source.data, this.field)
          if ( this.source.data.length == 1 ) {
            this.value = this.source.data[0]
            this.lockWatch = true
          }
        }
        this.disabled = this.readOnlyIfSet && (!!this.value)
        //console.log(this.source)
      }
    }
  },
  computed: {
    index: function() {
      if ( this.slotProps ) return this.slotProps.input.index
      else return undefined
    },
    display: function() {
      if ( this.slotProps && this.slotProps.input) return this.slotProps.input.label
      else return this.label
    },
    required: function() {
      return (this.index || 0) < this.min
    },
    rules: function() {
      if ( this.required ) {
        return [ v => !!v || this.display+" is required" ]
      } else {
        return []
      }
    }
  }
}
</script>
