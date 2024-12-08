# Next.js 15 Hydration Mismatch

This repository demonstrates a common hydration mismatch issue in Next.js 15 applications.  The problem arises when using a Date object within a component whose value changes between server-side rendering (SSR) and client-side hydration. 

## Problem

The `About` page uses the `Date` object to display the current date and time.  The date on the server differs from the date on the client causing a hydration mismatch error.

## Solution

The solution involves ensuring that the data used in components remains consistent between SSR and client-side rendering.