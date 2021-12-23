import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
   const nameInputRef = useRef();
   const ageInputRef = useRef();

   const [error, setError] = useState();

   const addUserHandler = (event) => {
      event.preventDefault();
      const username = nameInputRef.current.value;
      const age = ageInputRef.current.value;

      if (username.trim().length === 0 || age.trim().length === 0) {
         setError({
            title: "Input invalido",
            message: "Todos los campos son requeridos.",
         });
         return;
      }

      if (+age <= 0 || +age > 120) {
         setError({
            title: "Edad invalida",
            message: "La edad debe ser un numero entre 1 y 120.",
         });
         return;
      }

      props.onAddUser({
         id: Math.random(),
         name: username,
         age: +age,
      });

      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
   };

   const errorHandler = () => {
      setError(null);
   };

   return (
      <Wrapper>
         {error && (
            <ErrorModal
               title={error.title}
               message={error.message}
               onConfirm={errorHandler}
            />
         )}
         <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
               <label htmlFor="username">Nombre</label>
               <input id="username" type="text" ref={nameInputRef} />
               <label htmlFor="age">Edad (Años)</label>
               <input id="age" type="number" ref={ageInputRef} />
               <Button type="submit">Añadir Usuario</Button>
            </form>
         </Card>
      </Wrapper>
   );
};

export default AddUser;
