import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Opcional: enviar a un servicio de logging
    // console.error('ErrorBoundary capturó un error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback" role="alert" style={{ padding: '20px', color: '#fff', background: '#b00020' }}>
          Se produjo un error. Intenta recargar la página.
        </div>
      )
    }
    return this.props.children
  }
}