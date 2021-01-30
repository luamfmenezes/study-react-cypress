/// <reference types="Cypress" />

describe("My First test", () => {
  it("should be able add one new todo", () => {
    cy.visit("/todos");

    cy.intercept(
      {
        method: "POST",
        url: "/todos",
      },
      { id: 1, task: "new-task" }
    ).as("addTodo");

    cy.get("[data-cy=input-todo]").type("new-task");

    cy.get("[data-cy=button-todo]").click();

    cy.wait("@addTodo");

    cy.get("[data-cy=input-todo]").type("new-task2");

    cy.get("[data-cy=button-todo]").click();

    cy.wait("@addTodo");

    cy.get("[data-cy=container-todos]").children().should("have.length", 2);
  });
  it("should be able to remove a todo", () => {
    cy.visit("/todos");

    cy.intercept(
      {
        method: "POST",
        url: "/todos",
      },
      { id: 1, task: "new-task" }
    ).as("addTodo");

    cy.intercept(
      {
        method: "DELETE",
        url: "/todos/1",
      },
      {}
    ).as("removeTodo");

    cy.get("[data-cy=input-todo]").type("new-task");

    cy.get("[data-cy=button-todo]").click();

    cy.wait("@addTodo");

    cy.get("[data-cy=button-remove]").click();

    cy.wait("@removeTodo");

    cy.get("[data-cy=container-todos]").should("be.empty");
  });
});
