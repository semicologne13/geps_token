'use client'
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import DoughnutChart from "./DoughnutChart";


export default function Tokenomics() {
    const data = [
        20000000, 2500000, 2500000, 5000000, 5000000, 2500000, 5000000, 2500000, 5000000
    ]

    const labels = [
        "Presale", "R&D", "Marketing", "Treasury", "Team", "Partnership & Legal Compliance", "Liquidity", "Charity", "Reserve"
    ]
    
    const backgroundColor = [
        '#40d149', '#60e869', '#80ff88', '#ffbffb', '#ffa0f9', '#ff80f7', '#f7ff80', '#fbf540', '#ffea00'
    ]
  return (
    <main
        style={{ background: "linear-gradient(143.6deg, rgba(87, 255, 151, 0) 20.79%, rgba(121, 249, 157, 0.26) 40.92%, rgba(189, 238, 171, 0) 94.35%)", }}
        className="w-full min-h-screen flex flex-col items-center justify-center relative"
    >
      <Section id="tokenomics">
        <Container className="text-white">
          <h2 className="text-6xl font-bold text-white text-center mb-12">
              <Balancer>Tokenomics</Balancer>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center">
                <div style={{ width: '400px', height: '400px' }}>
                    <DoughnutChart data={data} labels={labels} backgroundColor={backgroundColor} />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {labels.map((label, index) => (
                    <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg">
                        <h3 className="text-sm font-semibold" style={{ color: backgroundColor[index] }}>{label}</h3>
                        <p className="text-lg font-bold">{data[index].toLocaleString()}</p>
                    </div>
                ))}
            </div>
          </div> 
        </Container>
      </Section>
    </main>
  );
}