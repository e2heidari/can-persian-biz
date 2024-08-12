'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CategoryPageContainer } from './styles'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <CategoryPageContainer>
            <Header />
            {children}
            <Footer />
        </CategoryPageContainer>
    )
}
