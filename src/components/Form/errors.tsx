const errors = {
   createUser: {
      name: {
         required: 'O campo nome é obrigatório.',
      },
      email: {
         required: 'Campo é obrigatório.',
         email: 'Digite um e-mail válido.',
         regex: '',
      },
      password: {
         required: 'O campo senha é obrigatório.',
         min: 'Mínimo de 6 caracteres para a senha.',
         confirmPassword: 'As senhas não são iguais. Digite novamente.',
      },
   },
};

export { errors };
