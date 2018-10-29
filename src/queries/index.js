import { gql } from 'apollo-boost'

const signupMutation = gql `
    mutation($firstname: String!, $lastname: String!, $email: String!, $password: String!){
        signUp(firstname:$firstname, lastname:$lastname, email:$email, password:$password){
            firstname
            lastname
            email
            password
        }
    }
`

const loginMutation = gql `
    mutation($email: String!, $password: String!){
        signUp(email:$email, password:$password){
            email
            password
        }
    }
`

export {loginMutation, signupMutation}