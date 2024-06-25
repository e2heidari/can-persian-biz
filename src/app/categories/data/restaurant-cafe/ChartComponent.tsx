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
    jsonLengths: { [key: string]: number }
    style?: React.CSSProperties // Optional style prop
}

const ChartComponent: React.FC<ChartComponentProps> = ({
    jsonLengths,
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
                        labels: Object.keys(jsonLengths).map((name) =>
                            name.replace('.json', '')
                        ),
                        datasets: [
                            {
                                label: 'Number of Restaurants',
                                data: Object.values(jsonLengths),
                                backgroundColor: '#3D4B78',
                                borderColor: '#B385A',
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'white',
                                font: {
                                    size: 16,
                                    weight: 'bold',
                                },
                                anchor: 'end',
                                align: 'start',
                                offset: -20,
                            },
                            legend: {
                                display: false,
                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'white', // Adjust the color of y-axis labels if needed
                                },
                            },
                            x: {
                                ticks: {
                                    color: 'white', // Adjust the color of x-axis labels if needed
                                },
                            },
                        },
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
    }, [jsonLengths]) // Re-create chart when jsonLengths changes

    return <canvas ref={chartRef} style={style} /> // Apply style to the canvas
}

export default ChartComponent
