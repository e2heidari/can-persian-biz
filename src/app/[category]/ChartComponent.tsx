import React, { useEffect, useRef } from 'react'
import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// Register Chart.js components and plugins
Chart.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
)

interface ChartComponentProps {
    labels: string[] // Labels for the chart (subcategories)
    dataValues: number[] // Data values for the chart (number of items)
    style?: React.CSSProperties // Optional style prop
}

const ChartComponent: React.FC<ChartComponentProps> = ({
    labels,
    dataValues,
    style,
}) => {
    const chartRef = useRef<HTMLCanvasElement>(null)
    const chartInstanceRef = useRef<Chart | null>(null) // Store chart instance

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d')
            if (ctx) {
                // Destroy previous chart instance if it exists
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy()
                }

                chartInstanceRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Number of Items',
                                data: dataValues,
                                backgroundColor: '#3D4B78',
                                borderColor: '#B385A',
                                borderWidth: 1,
                                barThickness: 15, // Set the bar width to 15px
                                maxBarThickness: 15, // Ensure max width is capped at 15px
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'black',
                                font: {
                                    size: 16,
                                    weight: 'bold',
                                },
                                anchor: 'end',
                                align: 'start',
                                offset: -17,
                            },
                            legend: {
                                display: false,
                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'black', // Adjust the color of y-axis labels if needed
                                },
                            },
                            x: {
                                ticks: {
                                    color: 'black', // Adjust the color of x-axis labels if needed
                                },
                            },
                        },
                        layout: {
                            padding: 10, // Add 5px padding around the chart
                        },
                        maintainAspectRatio: false, // Allow more control over width
                    },
                })
            }
        }

        // Cleanup function to destroy chart instance when component unmounts or updates
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy()
                chartInstanceRef.current = null
            }
        }
    }, [labels, dataValues]) // Re-create chart when labels or dataValues change

    return <canvas ref={chartRef} style={style} /> // Apply style to the canvas
}

export default ChartComponent
