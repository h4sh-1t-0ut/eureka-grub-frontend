import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeNew from '../pages/RecipeNew';

const renderShow = () => {
    render(
        <BrowserRouter>
            <RecipeNew />
        </BrowserRouter>
    )
}

describe("<RecipeNew />", () => {
    it("renders a header", () => {
        renderShow()
        const header = screen.getByRole('heading', {
            name: /new recipe/i
        })
        expect(header).toBeInTheDocument()
    })
    
    it("renders name label for slot", () => {
        renderShow()
        const nameSlotLabel = screen.getByText(/name/i)
        expect(nameSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for name", () => {
        renderShow()
        const nameEntrySlot = screen.getByPlaceholderText(/enter name here/i)
        expect(nameEntrySlot).toBeInTheDocument()
    })

    it("renders instructions label for slot", () => {
        renderShow()
        const instructionsSlotLabel = screen.getByText(/instructions/i)
        expect(instructionsSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for intructions", () => {
        renderShow()
        const instructionsEntrySlot = screen.getByPlaceholderText(/enter instructions here/i)
        expect(instructionsEntrySlot).toBeInTheDocument()
    })

    it("renders cook time label for slot", () => {
        renderShow()
        const cookTimeSlotLabel = screen.getByText(/cook time/i)
        expect(cookTimeSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for cook time", () => {
        renderShow()
        const cookTimeEntrySlot = screen.getByPlaceholderText(/enter cook time here/i)
        expect(cookTimeEntrySlot).toBeInTheDocument()
    })

    it("renders ingredients label for slot", () => {
        renderShow()
        const ingredientsSlotLabel = screen.getByText(/ingredients/i)
        expect(ingredientsSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for ingredients", () => {
        renderShow()
        const ingredientsEntrySlot = screen.getByPlaceholderText(/enter required ingredients/i)
        expect(ingredientsEntrySlot).toBeInTheDocument()
    })

    it("renders course label for slot", () => {
        renderShow()
        const courseSlotLabel = screen.getByText(/course of the day/i)
        expect(courseSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for course ", () => {
        renderShow()
        const courseEntrySlot = screen.getByPlaceholderText(/what type of course is this/i)
        expect(courseEntrySlot).toBeInTheDocument()
    })

    it("renders serving label for slot", () => {
        renderShow()
        const servingsSlotLabel = screen.getByText(/servings/i)
        expect(servingsSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for servings ", () => {
        renderShow()
        const servingsEntrySlot = screen.getByPlaceholderText(/enter serving amount/i)
        expect(servingsEntrySlot).toBeInTheDocument()
    })

    it("renders allergies label for slot", () => {
        renderShow()
        const allergiesSlotLabel =screen.getByText(/allegries/i)
        expect(allergiesSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for allergies ", () => {
        renderShow()
        const allergiesEntrySlot = screen.getByPlaceholderText(/enter any allergies/i)
        expect(allergiesEntrySlot).toBeInTheDocument()
    })

    it("renders tutorial link label for slot", () => {
        renderShow()
        const tutorialLinkSlotLabel = screen.getByText(/tutorial link/i)
        expect(tutorialLinkSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for allergies ", () => {
        renderShow()
        const tutorialLinkEntrySlot = screen.getByPlaceholderText(/enter a url instructional video/i)
        expect(tutorialLinkEntrySlot).toBeInTheDocument()
    })

    it("renders recipe image label for slot", () => {
        renderShow()
        const recipeImageSlotLabel = screen.getByText(/recipe image/i)
        expect(recipeImageSlotLabel).toBeInTheDocument()
    })

    it("renders entry slot for recipe image ", () => {
        renderShow()
        const recipeImageEntrySlot = screen.getByPlaceholderText(/enter an image for the recipe/i)
        expect(recipeImageEntrySlot).toBeInTheDocument()
    })

    it("renders submit button for new recipe entry", () => {
        renderShow()
        const button = screen.getByRole('button', {
            name: /submit/i
        })
        expect(button).toBeInTheDocument()
    })
})
