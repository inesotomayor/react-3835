import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }
  submitPost = e => {
    e.preventDefault()
    console.log(this.inputTitle.value)
    console.log(this.inputBody.value)
    let post = {
      title: this.inputTitle.value,
      body: this.inputBody.value
    }
    this.setState({
      posts: [...this.state.posts, ...[post]]
    })
  }

  componentDidMount() {
    this.inputTitle.focus()
    this.inputTitle.style.border = '1px solid #666'
  }

  render() {
    const Avatar = props => (
      <div className="avatar">
        <div className="photo">
          <img src={props.photoUrl} alt={props.alt || props.username} />
        </div>
        <p>{props.username}</p>
      </div>
    )

    return (
      <div className="formulario">
        <header>
          <Avatar
            username="Alejandra Smith"
            photoUrl="http://i.pravatar.cc/100?img=23"
            // El alt levanta el prop.username ya que no se especifica
          />
          <Avatar
            username="Julieta Gutiérrez"
            photoUrl="http://i.pravatar.cc/100?img=10"
            // El alt se indica en el componente:
            alt="Título de la foto"
          />
        </header>

        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Completar..."
            ref={inputTitle => {
              this.inputTitle = inputTitle
            }}
          />
          <textarea
            className="form-control"
            ref={inputBody => {
              this.inputBody = inputBody
            }}
          />
          <button className="btn btn-cancel" type="reset">
            Cancelar
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.submitPost}
          >
            Enviar
          </button>
        </form>
      </div>
    )
  }
}

export default Form
