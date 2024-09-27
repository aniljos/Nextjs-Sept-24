'use client'

import { Component, ReactNode } from "react";

type AppErrorBoundaryProps = {

    children: any
}

class AppErrorBoundary extends Component<AppErrorBoundaryProps>{

    state = {
        hasError: false,
        error: null 
    }

    componentDidCatch(error: Error): void {
        
        this.setState({
            hasError: true, 
            error: error
        })
    }

    render(): ReactNode  {
        
        if(!this.state.hasError){
            return this.props.children
        }
        else{
            <div className="alert alert-warning">
                <p>AppErrorBoundary</p>
                <p>Something went wrong</p>
                <p>{this.state.error}</p>
            </div>
        }
        
    }


}

export default AppErrorBoundary;