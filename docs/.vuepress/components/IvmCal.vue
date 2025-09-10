<template>
    <div class="grid-wrapper">
        <!-- Column headers (row 0) -->
        <div v-for="col in COLS" :key="'header-' + col" class="cell header-cell">
            <h3>{{ COL_NAMES[col - 1] }}</h3>
        </div>
        <!-- Grid cells (rows 1‑5) -->
        <template v-for="row in ROWS">
            <div v-for="col in COLS" :key="`r${row}c${col}`" class="cell content-cell">

            <div v-if="grid[row - 1][col - 1].valid">                
                <!-- Row that holds the number **and** the button -->
                <div class="header-row">
                    <div class="item-number">#{{ row }}‑{{ col }}</div>
                    <button @click="addItem(row, col)" class="add-btn">+</button>
                </div>


                <!-- Scrollable list of entries -->
                <ul class="entry-list">
                    <div class="list-wrapper">
                        <li v-for="(entry, idx) in grid[row - 1][col - 1].entries" :key="idx"
                            @click="handleItemClick(row, col, idx, entry)" class="entry">{{ entry }}</li>
                    </div>
                </ul>
            </div>
            <div v-else class="cell content-cell empty-cell"/>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'

/* --------------------------------------------------------------
   Constants – grid dimensions
   -------------------------------------------------------------- */
const ROWS = 5               // visible rows (excluding header)
const COLS = 7               // columns

const COL_NAMES = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"]

/* --------------------------------------------------------------
   Reactive data model
   --------------------------------------------------------------
   The grid is a 2‑dimensional array (ROWS × COLS). Each cell is an
   object with:
     • id   – a unique identifier (here just a string “rXcY”)
     • entries – an array of strings (the reactive list)
   -------------------------------------------------------------- */
type Cell = {
    id: string,
    valid: boolean,
    entries: string[]
}

/* Initialise the whole grid in one reactive structure. */
const grid = reactive<Cell[][]>(Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
        id: `r${r + 1}c${c + 1}`,
        valid: true,                  // example extra property
        entries: []                     // start empty – you can pre‑populate here
    }))
))

/* --------------------------------------------------------------
   Methods
   -------------------------------------------------------------- */

/**
 * Append a new entry to the column `col`.
 * The new entry is a simple string; you can replace it with any
 * richer object (e.g. `{ title, payload }`) if you need more data.
 */
function addItem(row: number, col: number) {
    // Find the first row in this column that we want to push to.
    // Here we simply add to the *first* row (row 0) – you could also
    // distribute across rows or keep a separate per‑column store.
    const targetCell = grid[row - 1][col - 1]   // row 0 (first visual row)
    const nextIndex = targetCell.entries.length + 1
    targetCell.entries.push(`Item ${nextIndex}`)
}

/**
 * Called when a list entry is clicked.
 * Replace the body with whatever you need – navigation, modal,
 * editing, etc.
 */
function handleItemClick(
    row: number,
    col: number,
    idx: number,
    entry: string
) {
    console.log(
        `Clicked row ${row}, col ${col}, index ${idx}:`,
        entry
    )
    // `grid` is reactive, so splicing the array updates the UI automatically
    const cell = grid[row - 1][col - 1]   // locate the correct cell (0‑based)
    cell.entries.splice(idx, 1)          // remove the clicked entry    
    // Example: alert(entry)
    // Or emit an event: emit('item-clicked', { row, col, idx, entry })
}

const updateGrid = (data) => {
    for (const key in data) {
        console.log(key, data[key])
    }
    Object.assign(grid, data)
}

onMounted(() => {
    console.log('IvmCal mounted')
    const d = grid.copyWithin()
    d[0][0].valid = false
    console.log(d)
    // Example: load initial data from an API or localStorage
    // fetch('/api/initial-data')
    //     .then(response => response.json())
    //     .then(data => {
    //         updateGrid(data)
    //     })
})


</script>

<style scoped>
/* --------------------------------------------------------------
   Layout – CSS Grid
   -------------------------------------------------------------- */
.grid-wrapper {
    display: grid;
    /* 7 columns, each taking an equal fraction of the width */
    grid-template-columns: repeat(7, 1fr);
    /* 6 rows: 1 header + 5 content rows */
    /*grid-template-rows: repeat(6, 1fr); */
    /* First row = 40 px (header), remaining 5 rows share the rest */
    grid-template-rows: 40px repeat(5, 1fr);
    gap: 1px;
    /* thin separator line */
    height: 100%;
    /* fill the parent container */
    background: #ddd;
    /* grid lines colour */
    max-height: 500px;
}

/* --------------------------------------------------------------
   Common cell styling
   -------------------------------------------------------------- */
.cell {
    background: #fff;
    /* padding: 4px; */
    box-sizing: border-box;
    overflow: hidden;
    /* keep everything inside the cell */
}


/* Header cells – contain the ADD button */
.header-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
}

/* Content cells – hold the item number + scrollable list */
.content-cell {
    display: flex;
    flex-direction: column;
    height: 6rem;
}

.empty-cell {
    background: #f0f000;
}

/* --------------------------------------------------------------
   Header row inside each cell – number centered, button right
   -------------------------------------------------------------- */
.header-row {
  display: flex;
  align-items: center;          /* vertical centering */
  justify-content: space-between; /* number left, button right */
  padding: 0 4px;               /* optional tiny horizontal gutter */
}

/* Center the item number within the space left of the button */
.item-number {
  flex: 1;                      /* take all remaining width */
  text-align: center;           /* centre the text */
  font-size: 0.85rem;
  color: #555;
}

/* Small “+” button – keep it compact */
.add-btn {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 24px;
  height: 24px;
  min-width: 0;                 /* override default button sizing */
  padding: 0;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
}
.add-btn:hover {
  background: #1565c0;
}


/* --------------------------------------------------------------
   Fixed cell size – determined by the parent container
   -------------------------------------------------------------- */
/* The grid itself already forces each cell to occupy an equal
   share of the wrapper’s width/height. No extra sizing needed. */


/* --------------------------------------------------------------
   Scrollable entry list
   -------------------------------------------------------------- */
.entry-list {
    flex: 1;
    /* take remaining vertical space */
    padding: 0;
    list-style: none;
    overflow-y: scroll;
    /* scroll when content exceeds height */
    scrollbar-width: thin;
    /* Firefox */
    overflow-x: hidden;
    margin: 0 8px 0 8px;
}

/* Hide default ul padding/margin on Safari/Chrome */
.entry-list::-webkit-scrollbar {
    width: 6px;
}

.entry-list::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .2);
    border-radius: 3px;
}

/* Individual entry */
.entry {
    padding: 2px 4px;
    cursor: pointer;
    border-radius: 2px;
}

.entry:hover {
    background: #eaeaea;
}

/* --------------------------------------------------------------
   ADD button
   -------------------------------------------------------------- */
.add-btn {
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 0.8rem;
    cursor: pointer;
    margin: 0 8px 0 8px;
}

.add-btn:hover {
    background: #1565c0;
}
</style>