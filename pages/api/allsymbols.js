export default async function handler(req, res) {
    const response =  await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // const data = [
    //     {
    //         "currency": "USD",
    //         "description": "ASHTEAD GROUP PLC",
    //         "displaySymbol": "ASHTF",
    //         "figi": "BBG000C17461",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001S610V7",
    //         "symbol": "ASHTF",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "GRAN TIERRA ENERGY INC",
    //         "displaySymbol": "GTE",
    //         "figi": "BBG000C2M300",
    //         "isin": null,
    //         "mic": "XASE",
    //         "shareClassFIGI": "BBG001S5RKW6",
    //         "symbol": "GTE",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "SIAM CEMENT PUB CO-FOR REG",
    //         "displaySymbol": "SCVPF",
    //         "figi": "BBG000BTY292",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001S6DXQ8",
    //         "symbol": "SCVPF",
    //         "symbol2": "",
    //         "type": "Foreign Sh."
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "ASLAN PHARMACEUTICALS LT-ADR",
    //         "displaySymbol": "ASLN",
    //         "figi": "BBG00KG283R9",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG00KG284G9",
    //         "symbol": "ASLN",
    //         "symbol2": "",
    //         "type": "ADR"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "ISHARES MSCI BRAZIL",
    //         "displaySymbol": "IERNF",
    //         "figi": "BBG00PNLM4D5",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001SHHWR1",
    //         "symbol": "IERNF",
    //         "symbol2": "",
    //         "type": "ETP"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "DOMINION ENERGY INC",
    //         "displaySymbol": "D",
    //         "figi": "BBG000BGVW60",
    //         "isin": null,
    //         "mic": "XNYS",
    //         "shareClassFIGI": "BBG001S5QCP3",
    //         "symbol": "D",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "NVENT ELECTRIC PLC",
    //         "displaySymbol": "NVT",
    //         "figi": "BBG00GNT7999",
    //         "isin": null,
    //         "mic": "XNYS",
    //         "shareClassFIGI": "BBG00GNT7B03",
    //         "symbol": "NVT",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "FIRST TRUST EUROPE",
    //         "displaySymbol": "FEP",
    //         "figi": "BBG001MKQKC2",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG001V11YX8",
    //         "symbol": "FEP",
    //         "symbol2": "",
    //         "type": "ETP"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "TEMPLETON EMERGING MKTS FND",
    //         "displaySymbol": "EMF",
    //         "figi": "BBG000BHWFQ2",
    //         "isin": null,
    //         "mic": "XNYS",
    //         "shareClassFIGI": "BBG001S5QVH0",
    //         "symbol": "EMF",
    //         "symbol2": "",
    //         "type": "Closed-End Fund"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "DEMANT A/S-UN ADR",
    //         "displaySymbol": "WILYY",
    //         "figi": "BBG000RN0F23",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001T3YVK1",
    //         "symbol": "WILYY",
    //         "symbol2": "",
    //         "type": "ADR"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "EWELLNESS HEALTHCARE CORP",
    //         "displaySymbol": "EWLL",
    //         "figi": "BBG002ZHM148",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG002ZHM1W7",
    //         "symbol": "EWLL",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "SMARTMETRIC INC",
    //         "displaySymbol": "SMME",
    //         "figi": "BBG000NQKGS8",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001SQPNV7",
    //         "symbol": "SMME",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "TRANS-LUX CORP",
    //         "displaySymbol": "TNLX",
    //         "figi": "BBG000BVC1S2",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001S5WRD6",
    //         "symbol": "TNLX",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "NICOLET BANKSHARES INC",
    //         "displaySymbol": "NIC",
    //         "figi": "BBG000QK0TG5",
    //         "isin": null,
    //         "mic": "XNYS",
    //         "shareClassFIGI": "BBG001SN0Y92",
    //         "symbol": "NIC",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "PASITHEA THERAPEUTICS CORP",
    //         "displaySymbol": "KTTA",
    //         "figi": "BBG01018ZGY8",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG01018ZHS3",
    //         "symbol": "KTTA",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "MULTIPLAN CORP",
    //         "displaySymbol": "MPLN",
    //         "figi": "BBG00RLZ9M74",
    //         "isin": null,
    //         "mic": "XNYS",
    //         "shareClassFIGI": "BBG00RLZ9M83",
    //         "symbol": "MPLN",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "Tc Energy Corporation",
    //         "displaySymbol": "TRPPF",
    //         "figi": "",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "",
    //         "symbol": "TRPPF",
    //         "symbol2": "",
    //         "type": ""
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "UBUYHOLDINGS INC",
    //         "displaySymbol": "UBYH",
    //         "figi": "BBG000MDQLM7",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001SFVF87",
    //         "symbol": "UBYH",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "RSE ARCHIVE INT SER-05MJLJ",
    //         "displaySymbol": "RSMLS",
    //         "figi": "BBG018CZ9K88",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG018CZ9L31",
    //         "symbol": "RSMLS",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "TECHNISCAN INC",
    //         "displaySymbol": "TSNI",
    //         "figi": "BBG000THN335",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001T064Q2",
    //         "symbol": "TSNI",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "ASTORIA US QUALITY KINGS ETF",
    //         "displaySymbol": "ROE",
    //         "figi": "BBG01HQ6C8G1",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG01HQ6C997",
    //         "symbol": "ROE",
    //         "symbol2": "",
    //         "type": "ETP"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "HOLIDAY ISLAND HOLDINGS INC",
    //         "displaySymbol": "HIHI",
    //         "figi": "BBG000DMNP69",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001SJP0X1",
    //         "symbol": "HIHI",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "22ND CENTURY GROUP INC",
    //         "displaySymbol": "XXII",
    //         "figi": "BBG000LS03D3",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG001SQ4DP9",
    //         "symbol": "XXII",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "SAMPO OYJ-A SHS-UNSP ADR",
    //         "displaySymbol": "SAXPY",
    //         "figi": "BBG000DFWX21",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001T3QY60",
    //         "symbol": "SAXPY",
    //         "symbol2": "",
    //         "type": "ADR"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "VISTEON CORP",
    //         "displaySymbol": "VC",
    //         "figi": "BBG0016T3GQ0",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG001TCM086",
    //         "symbol": "VC",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "AMERICAN STATES WATER CO",
    //         "displaySymbol": "AWR",
    //         "figi": "BBG000F964B6",
    //         "isin": null,
    //         "mic": "XNYS",
    //         "shareClassFIGI": "BBG001S9T5Z6",
    //         "symbol": "AWR",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "ADVANCED INFO SERVICE-NVDR",
    //         "displaySymbol": "AVIVF",
    //         "figi": "BBG000BVW0X6",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001SCGK08",
    //         "symbol": "AVIVF",
    //         "symbol2": "",
    //         "type": "NVDR"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "NATIONAL HEALTHCARE CORP",
    //         "displaySymbol": "NHC",
    //         "figi": "BBG000BY3T87",
    //         "isin": null,
    //         "mic": "XASE",
    //         "shareClassFIGI": "BBG001SBJ378",
    //         "symbol": "NHC",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "GALMED PHARMACEUTICALS LTD",
    //         "displaySymbol": "GLMD",
    //         "figi": "BBG005ZD02W1",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG005ZD02V2",
    //         "symbol": "GLMD",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "DEALERADVANCE INC",
    //         "displaySymbol": "DLAD",
    //         "figi": "BBG000F6B9S7",
    //         "isin": null,
    //         "mic": "OOTC",
    //         "shareClassFIGI": "BBG001SJ2903",
    //         "symbol": "DLAD",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "PIPER SANDLER COS",
    //         "displaySymbol": "PIPR",
    //         "figi": "BBG000FQXC75",
    //         "isin": null,
    //         "mic": "XNYS",
    //         "shareClassFIGI": "BBG001SGY6K8",
    //         "symbol": "PIPR",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "ABVC BIOPHARMA INC",
    //         "displaySymbol": "ABVC",
    //         "figi": "BBG000Q844Z2",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG001SMCS49",
    //         "symbol": "ABVC",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "SWIFTMERGE ACQUISITION COR-A",
    //         "displaySymbol": "IVCP",
    //         "figi": "BBG011WZGGP3",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG011WZGGQ2",
    //         "symbol": "IVCP",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    //     {
    //         "currency": "USD",
    //         "description": "PATRIA INVESTMENTS LTD-A",
    //         "displaySymbol": "PAX",
    //         "figi": "BBG00YQ7XJT2",
    //         "isin": null,
    //         "mic": "XNAS",
    //         "shareClassFIGI": "BBG00YQ7XKN5",
    //         "symbol": "PAX",
    //         "symbol2": "",
    //         "type": "Common Stock"
    //     },
    // ];

    const data = await response.json();

    res.status(200).json(data);
}
