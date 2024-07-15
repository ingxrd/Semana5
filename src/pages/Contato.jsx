import { Button } from "react-bootstrap";
import {useForm} from "react-hook-form";

function Contato() {
    const {register, handleSubmit, formState: { errors }} = useForm(); //1º passo

    function cadastrar(data){
        console.log("Cadastro!");
        console.log(data);
    }


  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}> 
        <h1>Contato</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" 
          id="nome" 
          className="form-control"
          {...register("nome", {required: true, maxLength: 150})} 
          />
          {errors.nome && <small className="invalid">O nome é inválido!</small>}

        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" 
          id="email" 
          className="form-control" 
          {...register("email", {required: true})}
          />
          {errors.email && <small className="invalid">O e-mail é inválido!</small>}
        </div>
        
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea 
            id="feedback" 
            className="form-control"
            {...register("feedback", { required: true })}
            ></textarea>
            {errors.feedback && <small className="invalid">O feedback é inválido!</small>}
        </div>

        <Button variant="warning" className="mt-1 w-100" type="submit">
          Enviar Feedback
        </Button>
      </form>
    </main>
  );
}

export default Contato;
