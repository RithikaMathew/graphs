import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

export default function SimpleLineChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Generate symmetric data
        const time = Array.from({ length: 500 }, (_, i) => i * 10 / 500);
        const phaseA = time.map(t => Math.sin(t));
        const phaseB = time.map(t => Math.cos(t));
        const phaseC = time.map(t => Math.sin(t + Math.PI));

        // Format the data for the chart
        const newData = time.map((t, i) => ({ time: t, phaseA: phaseA[i], phaseB: phaseB[i], phaseC: phaseC[i] }));

        setData(newData);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: '.csv',
        onDrop: (acceptedFiles) => {
            acceptedFiles.forEach((file) => {
                const reader = new FileReader();

                reader.onabort = () => console.log('file reading was aborted');
                reader.onerror = () => console.log('file reading has failed');
                reader.onload = () => {
                    // Parse the file data here
                    const csvData = reader.result;
                    // Convert the CSV data into the format you need and set it in state
                    const newData = parseCsvData(csvData);
                    setData(newData);
                };
                reader.readAsText(file);
            });
        }
    });

    // Add a function to parse the CSV data
    function parseCsvData(data) {
        const parsedData = Papa.parse(data, { header: false, dynamicTyping: true }).data;
        return parsedData.map(row => ({ time: row[0], phaseA: row[1], phaseB: row[2], phaseC: row[3] }));
    }

    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="linear" dataKey="phaseA" stroke="red" dot={false} />
                <Line type="linear" dataKey="phaseB" stroke="green" dot={false} />
                <Line type="linear" dataKey="phaseC" stroke="blue" dot={false} />
            </LineChart>
        </div>
    );
}