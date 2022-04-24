import React, { useState } from 'react'
import * as yup from 'yup'
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import { useTheme } from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'

export default function SignIn() {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: yup.string().required('A senha é obrigatória'),
      })

      await schema.validate({ email, password })
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert('Opa', error.message)
      }
      Alert.alert('Opa', 'Erro na autenticação')
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>
              Estamos {'\n'}
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button title="Login" onPress={handleSignIn} enabled />
            <Button
              title="Criar conta gratuita"
              light
              onPress={() => {}}
              color={theme.colors.background_secondary}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
