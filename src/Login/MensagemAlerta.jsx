const MensagemErro = ({msg, tipo}) => {
  if(tipo == "sucesso"){
    return (<p className="alert alert-success">
    {msg}
  </p>)
  }
    return (<p className="alert alert-danger">
    {msg}
  </p>)
  }
  
  export default MensagemErro