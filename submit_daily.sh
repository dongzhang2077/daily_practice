#!/bin/bash

# Daily Practice Submission Script
# Usage: ./submit_daily.sh "problem_name" "solution_file.py"

if [ "$#" -ne 2 ]; then
    echo "Usage: ./submit_daily.sh <problem_name> <solution_file>"
    exit 1
fi

PROBLEM_NAME=$1
SOLUTION_FILE=$2
TODAY=$(date +%Y-%m-%d)
DIR="solutions/$TODAY"
EXT="${SOLUTION_FILE##*.}"

# Create directory for today if it doesn't exist
mkdir -p "$DIR"

# Copy solution file, preserving original extension
cp "$SOLUTION_FILE" "$DIR/${PROBLEM_NAME}.${EXT}"

# Git operations
git add .
git commit -m "Add solution: $PROBLEM_NAME ($TODAY)"
git push origin main

echo "Solution added successfully!"
