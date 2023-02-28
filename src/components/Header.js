.wrapper {
  width: 100%;
  padding: 8rem 20px 3rem;
}
.todos {
  max-width: 580px;
  margin: 0 auto;
}
.form-container {
  display: flex;
  border-radius: calc(0.1 * 100px);
  box-shadow: 0px 4px 14px 0px rgba(70, 70, 70, 0.38);
  justify-content: space-around;
  background: #fff;
  font-size: 1rem;
}
.input-text {
  width: 85%;
  padding-right: 5px;
  padding-left: 10px;
  border-radius: calc(0.5 * 100px);
  font-size: 1rem;
}
.input-text::placeholder {
  color: #000;
}
.input-submit {
  background: transparent;
  color: #5b5b5b;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 600;
  margin-right: 10px;
}
.input-text,
.input-submit {
  height: 45px;
  outline: none;
  border: none;
}
.submit-warning {
  font-size: 13px;
  color: red;
  margin-top: 5px;
  display: block;
}
