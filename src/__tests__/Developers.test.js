import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Developers from '../pages/Developers';

const renderShow = () => {
    render(
        <BrowserRouter>
            <Developers />
        </BrowserRouter>  
    ) 
}

describe("<Home />", () => {
    it("renders a Image for Brandon", () => {
        renderShow()
        const imgCardOne = screen.getAllByRole('img', { name: /team\-member/i })
        expect(imgCardOne[0]).toBeInTheDocument()
    })

    it("renders a header for Brandon", () => {
        renderShow()
        const headerBrandon = screen.getByRole('heading', { name: /brandon shinzato/i })
        expect(headerBrandon).toBeInTheDocument()
    })

    it("renders a title for Brandon", () => {
        renderShow()
        const titleBrandon = screen.getAllByText(/product manager/i)
        expect(titleBrandon[0]).toBeInTheDocument()
        })

    it("renders a cohort for Brandon", () => {
        renderShow()
        const cohortBrandon = screen.getAllByText(/learn academy delta 2023/i)
        expect(cohortBrandon[0]).toBeInTheDocument()
    })

    it("renders a contact button for Brandon", () => {
        renderShow()
        const contactBrandon = screen.getAllByRole('button', { name: /contact/i })
        expect(contactBrandon[0]).toBeInTheDocument()
    })

    it("renders header the bubble title for Brandon", () => {
        renderShow()
        const bubbleTitleBrandon =  screen.getAllByText(/product manager/i)
        expect(bubbleTitleBrandon[0]).toBeInTheDocument()
    })

    it("renders a description for bubble title for Brandon", () => {
        renderShow()
        const titleDescriptionBrandon = screen.getByText(
            /responsible for both product planning and product marketing\./i)
        expect(titleDescriptionBrandon).toBeInTheDocument()
    })

    it("renders header the bubble title of bio for Brandon", () => {
        renderShow()
        const bioTitleBrandon = screen.getAllByText(/bio/i)
        expect(bioTitleBrandon[0]).toBeInTheDocument()
    })

    it("renders description for bio of Brandon", () => {
        renderShow()
        const bioDescriptionBrandon = screen.getByText(
            /junior full stack developer \| united states air force veteran \| passionate about tech \| growth mindset/i
            )
        expect(bioDescriptionBrandon).toBeInTheDocument()
    })

    it("renders title for tech stack for Brandon", () => {
        renderShow()
        const techStackTitleBrandon = screen.getAllByText(/tech stack/i)
        expect(techStackTitleBrandon[0]).toBeInTheDocument()
    })

    it("renders list items for tech stack for Brandon", () => {
        renderShow()
        const techStackDescriptionBrandon = screen.getAllByRole('listitem')
        expect(techStackDescriptionBrandon[0]).toBeInTheDocument()
    })









})
