<template>
    <ClientOnly>
        <apexchart :key="series" height="500" width="800" :options="options" :series="series"></apexchart>
    </ClientOnly>
</template>

<script setup>
const options = ref({
    chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
    },
    title: {
        text: 'Dynamic Updating Chart',
        align: 'left',
        fontFamily: ['Helvetica, Arial, sans-serif']
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
            left: 18,
            right: 0,
            top: 0,
            bottom: 0
        },
    },
    xaxis: {
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
            show: true,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                fontSize: '15px'
            }
        }
    },
    yaxis: {
        show: true,
        labels: {
            style: {
                fontSize: '15px'
            }
        }
    },
})
const series = ref()
const updateChart = () => {
    options.value = {
        ...options.value,
    };
    series.value = [
        {
            name: 'New User',
            data: [10, 20, 15, 5, 15, 5],
            color: "#3B56DB",
        },
        {
            name: 'New User',
            data: [13, 21, 25, 15, 35, 15],
            color: "#3B56DB",
        },
    ];
};
onMounted(() => {
    // updateChart();
    updatePieChart()
});
</script>