import React from "react";

type HelloProps = {
  title: string;
  desc: string;
}

const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.title} and {props.desc}!
  </h1>
);

Hello.defaultProps = {
  title: 'none title',
  desc: 'none desc',
};

export default Hello;