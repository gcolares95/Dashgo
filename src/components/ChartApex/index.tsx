import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { theme } from "@chakra-ui/react";

export function ChartApex() {
    // Para carregar componente de forma dinâmica
    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false, // Chart vai ser carregado pelo browser, e não pelo server do next
    })

    // Configurações do gráfico
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[500],
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: theme.colors.gray[600]
            },
            axisTicks: {
                color: theme.colors.gray[600]
            },
            categories: [
                '2021-03-18T00:00:00:000Z',
                '2021-03-19T00:00:00:000Z',
                '2021-03-20T00:00:00:000Z',
                '2021-03-21T00:00:00:000Z',
                '2021-03-22T00:00:00:000Z',
                '2021-03-23T00:00:00:000Z',
                '2021-03-24T00:00:00:000Z',
            ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark', // vá do + claro para o + escuro
                opacityFrom: 0.7,
                opacityTo: 0.3
            }
        },
    };

    // Dados do gráfico
    const series = [
        { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }
    ];

    return (
        <Chart options={options} series={series} type="area" height={160} />
    )
}