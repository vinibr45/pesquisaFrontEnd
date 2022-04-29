<template>
  <div class="sobe">
    <h2>Preencha a pesquisa!</h2>
    <FormulateForm v-model="formValues" @submit="handleSubmit">
            <div class="double-wide">
      <FormulateInput name="nome" label="Nome" validation="required" />
      <FormulateInput
        type="email"
        name="email"
        label="Email"
        validation="required|email"
      />
      <FormulateInput nome="login" label="Login" validation="required" />
      <FormulateInput
        type="password"
        name="password"
        label="Senha"
        validation="between:3,10,lenght"
      />
            </div>
      <FormulateInput
        type="checkbox"
        name="Linguagem Favorita"
        label="Lingua Favorita"
        :options="{
          Javascript: 'JavaScript',
          VueJs: 'VueJs',
          CSS3: 'CSS3',
          HTML5: 'HTML5',
        }"
        validation="max:1"
      />
      <FormulateInput
        type="range"
        min="5"
        max="99"
        name="Idade"
        label="Qual sua idade?"
        validation="between:15,99,value"
        :show-value="true"
        :value="0"
        error-behavior="live"
      />

      <FormulateInput
        type="checkbox"
        name="termosDeAceite"
        label="Você autoriza enviar esse Formulário?"
        validation="required"
      />
      <FormulateInput type="submit" label="Enviar!" />
    </FormulateForm>
    <h3>Dados:</h3>
    {{ formValues }}
  </div>
</template>

<script>
export default {
  data: () => ({
    formValues: {},
  }),
  methods: {
    handleSubmit() {},
  },
};
</script>

<style>
.sobe{
  margin-bottom: 80px;
}

  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
</style>