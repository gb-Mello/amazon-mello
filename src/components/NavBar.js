import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              Amazon-Mello
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                Page 1 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Eletronicos</a>
                </li>
                <li>
                  <a href="#">Jogos</a>
                </li>
                <li>
                  <a href="#">Consoles</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user"></span> Cadastre-se
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <CartWidget />
    </>
  );
};

export default Navbar;
