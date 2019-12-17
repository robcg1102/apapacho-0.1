import React, { Component, createContext } from 'react'
import AUTH_SERVICE from './services/AuthService'
import COMMENT_SERVICE from './services/CommentService'
import VISIT_SERVICE from './services/VisitService'
import Swal from 'sweetalert2'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      name: '',
      email: '',
      password: '',
      typeUser: ''
    },
    loginForm: {
      email: '',
      password: ''
    },
    user: {},

    commentForm: {
      comment: '',
      userID: ''
    },
    commentData: {},

    visitForm: {
      description: '',
      date: '',
      userID: ''
    },
    visitData: {}
  }

  componentDidMount() {
    this.setState({commentData: this.viewComments()})
    //console.log(this.state.commentData)
    if (document.cookie) {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ 
            loggedUser: true, user: data.user,
             commentData: data.comment,
             commentForm: {userID: data.user._id},
             visitForm: {userID: data.user._id}
            })
          Swal.fire(`Bienvenido de nuevo ${data.user.name}`)
          
        })
        .catch(err => console.log(err))
    }
  }

  viewComments = async () => {
    const data = await COMMENT_SERVICE.getComments()
    data.data.comments.forEach(e=>{
      console.log(e.comment)
    })
    return data
  }

  handleInput = (e, obj) => {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.value
    this.setState({ obj: a })
  }

  handleSignup = async e => {
    e.preventDefault()
    const { data } = await AUTH_SERVICE.signup(this.state.formSignup)
    Swal.fire(`Bienvenido ${data.user.name}`, 'Usuario creado')
    this.state.formSignup.name = ''
    this.state.formSignup.email = ''
    this.state.formSignup.password = ''
    this.state.formSignup.typeUser = ''
  }

  handleLogin = (e, cb) => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        this.setState({ loggedUser: true, user: data.user })
        Swal.fire(`Bienvenido ${data.user.name}`)
        cb()
      })
      .catch(err => {
        Swal.fire(`Usuario o contraseña erróneas`)
      })
  }

  handleLogout = async cb => {
    await AUTH_SERVICE.logout()
    window.localStorage.clear()
    this.state.loginForm.email = '';
    this.state.loginForm.password = '';
    this.setState({ loggedUser: false, user: {} })
    cb()
  }

  handleComment = async e => {
    e.preventDefault()
    await COMMENT_SERVICE.comment(this.state.commentForm)
    Swal.fire('Comentario creado')
    if(this.state.commentForm.comment !== 0){
      this.state.commentForm.comment = ''
    }
  }

  handleVisit = async e => {
    e.preventDefault()
    await VISIT_SERVICE.createVisit(this.state.visitForm)
    Swal.fire('Visita creada')
    if(this.state.visitForm.description !== 0){
      this.state.visitForm.description = ''
      this.state.visitForm.date = ''
    }
  }


  render() {
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          user: this.state.user,

          handleComment: this.handleComment,
          commentForm: this.state.commentForm,
          commentData: this.state.commentData,
          viewComments: this.viewComments, 

          handleVisit: this.handleVisit,
          visitForm: this.state.visitForm,

          
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider