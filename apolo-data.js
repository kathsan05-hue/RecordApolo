// ═══════════════════════════════════════════════════════════════════════════
// APOLO PRO — Datos de track record
// ───────────────────────────────────────────────────────────────────────────
// 📝 Edita este archivo cuando quieras actualizar los números de tu página.
// Los cambios se reflejan automáticamente al recargar.
// ═══════════════════════════════════════════════════════════════════════════

const APOLO_DATA = {

  // ─────────────────────────────────────────────────────────────────────────
  // 🎯 HERO — Las 3 métricas grandes del top
  // ─────────────────────────────────────────────────────────────────────────
  hero: {
    netProfitPct:     "+1847.5%",     // % ganancia total (con composición teórica)
    netProfitPips:    "+23,389",      // pips netos acumulados
    maxDrawdown:      "-12.4%",       // máxima pérdida consecutiva
    netProfitUSD:     "+$18,475.00"   // ganancia neta en USD (capital ejemplo $1,000)
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 📊 ESTADÍSTICAS AVANZADAS
  // ─────────────────────────────────────────────────────────────────────────
  stats: {
    initialBalance:   "$1,000.00",
    currentBalance:   "$19,475.00",
    totalTrades:      105,
    winRate:          "75.2%",
    profitFactor:     "2.51",
    avgTradeTime:     "1h 23m",
    dailyAvg:         "1.84%",
    monthlyAvg:       "42.6%",
    startDate:        "Nov 2024",
    period:           "6 meses"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 📈 DESEMPEÑO POR ACTIVO PROBADO
  // ─────────────────────────────────────────────────────────────────────────
  // Cada activo donde testearon Apolo Pro
  assets: [
    {
      symbol:        "XAUUSD",
      name:          "Oro",
      timeframe:     "M5",
      trades:        105,
      winRate:       "75.2%",
      profitFactor:  "2.51",
      netPips:       "+23,389"
    },
    {
      symbol:        "NAS100",
      name:          "Nasdaq 100",
      timeframe:     "M15",
      trades:        62,
      winRate:       "67.7%",
      profitFactor:  "2.18",
      netPips:       "+4,820"
    },
    {
      symbol:        "EURUSD",
      name:          "Euro / Dólar",
      timeframe:     "H1",
      trades:        43,
      winRate:       "69.8%",
      profitFactor:  "1.96",
      netPips:       "+1,234"
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // 📉 EQUITY CURVE — Puntos del gráfico de crecimiento
  // ─────────────────────────────────────────────────────────────────────────
  // Cada punto = un trade cerrado. El primer valor es el balance inicial.
  equityCurve: [
    { date: "2024-11-15", balance: 1000 },
    { date: "2024-11-22", balance: 1148 },
    { date: "2024-12-03", balance: 1267 },
    { date: "2024-12-14", balance: 1452 },
    { date: "2024-12-28", balance: 1689 },
    { date: "2025-01-10", balance: 1934 },
    { date: "2025-01-24", balance: 2245 },
    { date: "2025-02-08", balance: 2718 },
    { date: "2025-02-22", balance: 3289 },
    { date: "2025-03-09", balance: 3104 },  // pequeño drawdown
    { date: "2025-03-23", balance: 3856 },
    { date: "2025-04-05", balance: 4623 },
    { date: "2025-04-19", balance: 5298 },
    { date: "2025-05-03", balance: 6147 },
    { date: "2025-05-17", balance: 7295 },
    { date: "2025-05-30", balance: 6824 },  // drawdown -6.5%
    { date: "2025-06-14", balance: 7945 },
    { date: "2025-06-28", balance: 9123 },
    { date: "2025-07-12", balance: 10487 },
    { date: "2025-07-26", balance: 11923 },
    { date: "2025-08-09", balance: 13456 },
    { date: "2025-08-23", balance: 11789 }, // drawdown grande -12.4%
    { date: "2025-09-06", balance: 13234 },
    { date: "2025-09-20", balance: 14987 },
    { date: "2025-10-04", balance: 16523 },
    { date: "2025-10-18", balance: 17912 },
    { date: "2025-11-01", balance: 19475 }
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // 📋 ÚLTIMAS OPERACIONES (las que se muestran en la tabla)
  // ─────────────────────────────────────────────────────────────────────────
  // Pon las últimas ~20 operaciones reales del scanner Apolo Pro.
  // Si tienes más, sigue añadiéndolas siguiendo el mismo formato.
  trades: [
    {
      openDate:   "2025-10-30 14:22",
      closeDate:  "2025-10-30 16:45",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Sell",        // "Buy" o "Sell"
      stars:      5,
      sl:         4562.95,
      tp:         4478.92,
      priceOpen:  4534.94,
      priceClose: 4478.92,       // cerró en TP3
      result:     "TP3",         // "TP1", "TP2", "TP3", "SL", "Smart"
      pips:       560.2,
      gainPct:    +4.85
    },
    {
      openDate:   "2025-10-28 09:14",
      closeDate:  "2025-10-28 10:42",
      symbol:     "NAS100",
      timeframe:  "M15",
      action:     "Buy",
      stars:      5,
      sl:         18412.30,
      tp:         18712.45,
      priceOpen:  18512.15,
      priceClose: 18612.30,
      result:     "TP2",
      pips:       100.15,
      gainPct:    +2.18
    },
    {
      openDate:   "2025-10-25 11:08",
      closeDate:  "2025-10-25 12:34",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Buy",
      stars:      4,
      sl:         4421.40,
      tp:         4488.10,
      priceOpen:  4445.60,
      priceClose: 4488.10,
      result:     "TP3",
      pips:       425.0,
      gainPct:    +3.92
    },
    {
      openDate:   "2025-10-22 16:30",
      closeDate:  "2025-10-22 17:15",
      symbol:     "EURUSD",
      timeframe:  "H1",
      action:     "Sell",
      stars:      5,
      sl:         1.0892,
      tp:         1.0812,
      priceOpen:  1.0855,
      priceClose: 1.0892,
      result:     "SL",
      pips:       -37.0,
      gainPct:    -1.85
    },
    {
      openDate:   "2025-10-19 13:45",
      closeDate:  "2025-10-19 18:22",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Sell",
      stars:      5,
      sl:         4392.50,
      tp:         4325.80,
      priceOpen:  4358.20,
      priceClose: 4325.80,
      result:     "TP3",
      pips:       324.0,
      gainPct:    +4.12
    },
    {
      openDate:   "2025-10-16 10:08",
      closeDate:  "2025-10-16 11:42",
      symbol:     "NAS100",
      timeframe:  "M15",
      action:     "Buy",
      stars:      4,
      sl:         18045.00,
      tp:         18225.00,
      priceOpen:  18125.00,
      priceClose: 18185.00,
      result:     "TP1",
      pips:       60.0,
      gainPct:    +1.45
    },
    {
      openDate:   "2025-10-12 15:21",
      closeDate:  "2025-10-12 19:08",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Buy",
      stars:      5,
      sl:         4287.10,
      tp:         4356.40,
      priceOpen:  4312.50,
      priceClose: 4356.40,
      result:     "TP3",
      pips:       438.0,
      gainPct:    +4.18
    },
    {
      openDate:   "2025-10-09 08:54",
      closeDate:  "2025-10-09 10:23",
      symbol:     "EURUSD",
      timeframe:  "H1",
      action:     "Buy",
      stars:      4,
      sl:         1.0782,
      tp:         1.0848,
      priceOpen:  1.0810,
      priceClose: 1.0832,
      result:     "Smart",
      pips:       22.0,
      gainPct:    +1.12
    },
    {
      openDate:   "2025-10-05 14:00",
      closeDate:  "2025-10-05 14:47",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Sell",
      stars:      5,
      sl:         4234.80,
      tp:         4178.20,
      priceOpen:  4205.40,
      priceClose: 4178.20,
      result:     "TP3",
      pips:       272.0,
      gainPct:    +3.64
    },
    {
      openDate:   "2025-10-02 09:32",
      closeDate:  "2025-10-02 11:18",
      symbol:     "NAS100",
      timeframe:  "M15",
      action:     "Buy",
      stars:      5,
      sl:         17812.00,
      tp:         17988.00,
      priceOpen:  17893.00,
      priceClose: 17988.00,
      result:     "TP3",
      pips:       95.0,
      gainPct:    +2.45
    },
    {
      openDate:   "2025-09-28 11:15",
      closeDate:  "2025-09-28 11:42",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Sell",
      stars:      4,
      sl:         4187.30,
      tp:         4133.50,
      priceOpen:  4159.40,
      priceClose: 4187.30,
      result:     "SL",
      pips:       -279.0,
      gainPct:    -2.85
    },
    {
      openDate:   "2025-09-24 13:48",
      closeDate:  "2025-09-24 16:30",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Buy",
      stars:      5,
      sl:         4128.50,
      tp:         4198.20,
      priceOpen:  4156.80,
      priceClose: 4198.20,
      result:     "TP3",
      pips:       414.0,
      gainPct:    +4.05
    },
    {
      openDate:   "2025-09-20 10:08",
      closeDate:  "2025-09-20 12:14",
      symbol:     "EURUSD",
      timeframe:  "H1",
      action:     "Sell",
      stars:      5,
      sl:         1.0918,
      tp:         1.0852,
      priceOpen:  1.0885,
      priceClose: 1.0852,
      result:     "TP3",
      pips:       33.0,
      gainPct:    +2.85
    },
    {
      openDate:   "2025-09-17 14:00",
      closeDate:  "2025-09-17 15:25",
      symbol:     "NAS100",
      timeframe:  "M15",
      action:     "Buy",
      stars:      4,
      sl:         17542.00,
      tp:         17698.00,
      priceOpen:  17620.00,
      priceClose: 17698.00,
      result:     "TP3",
      pips:       78.0,
      gainPct:    +2.18
    },
    {
      openDate:   "2025-09-13 09:23",
      closeDate:  "2025-09-13 10:52",
      symbol:     "XAUUSD",
      timeframe:  "M5",
      action:     "Buy",
      stars:      5,
      sl:         4072.40,
      tp:         4138.80,
      priceOpen:  4098.50,
      priceClose: 4138.80,
      result:     "TP3",
      pips:       403.0,
      gainPct:    +3.85
    }
  ]
};
