import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const RecipeShow = ({ recipes, deleteRecipe }) => {
  const [instructionModal, setInstructionModal] = useState(false)
  const [ingredientsModal, setIngredientsModal] = useState(false)

  let { id } = useParams()

  const toggleInstructionModal = () => setInstructionModal(!instructionModal)
  const toggleIngredientsModal = () => setIngredientsModal(!ingredientsModal)

  const currentRecipe = recipes?.find(recipe => recipe.id === +id)

  return (
    <>
      <h1>Your Recipe of Disaster</h1>
      <div>
      {currentRecipe && 
        <Card style={{width: '16rem'}} outline color='dark'>
          <img alt={currentRecipe.name} src={currentRecipe.recipe_image}/>
          <CardBody>
            <CardTitle tag="h5">
              {currentRecipe.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            Courses: {currentRecipe.course}
            </CardSubtitle>
            <CardText>
              Cook Time: {currentRecipe.cook_time}, 
              Servings: {currentRecipe.servings}
            </CardText>
            <NavLink to='/recipes'>
              <Button aria-label='Disaster list'>
                  Back to Recipes
              </Button>
            </NavLink>
            <NavLink to={`/editrecipe/${currentRecipe.id}`}>
              <Button aria-label='Disaster edit'>
                  Edit
              </Button>
            </NavLink>
            <NavLink to={'/recipes'}>
              <Button aria-label='Disaster delete' onClick={() => {deleteRecipe(id)}}>
                  Delete Disaster
              </Button>
            </NavLink>
            
            <Button onClick={toggleInstructionModal}>
              Instructions
            </Button>
            <Modal isOpen={instructionModal} toggle={toggleInstructionModal}>
              <ModalHeader toggle={toggleInstructionModal}>
                Instructions
              </ModalHeader>
              <ModalBody>
                {currentRecipe.instructions}
              </ModalBody>
              <ModalFooter>
                <Button onClick={toggleInstructionModal}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>

            <Button onClick={toggleIngredientsModal}>
              Ingredients
            </Button>
            <Modal isOpen={ingredientsModal} toggle={toggleIngredientsModal}>
              <ModalHeader toggle={toggleIngredientsModal}>
                Ingredients
              </ModalHeader>
              <ModalBody>
                {currentRecipe.ingredients}
              </ModalBody>
              <ModalFooter>
                <Button onClick={toggleIngredientsModal}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      }
      </div>
    </>
  )
}

export default RecipeShow