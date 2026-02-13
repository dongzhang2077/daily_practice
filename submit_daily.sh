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

# Create directory for today if it doesn't exist
mkdir -p "$DIR"

# Copy solution file
cp "$SOLUTION_FILE" "$DIR/${PROBLEM_NAME}.py"

# Create README for the problem
cat > "$DIR/README.md" << EOF
# $PROBLEM_NAME

Solved on: $TODAY

## Problem Description

[Add problem description from Codewars]

## Solution

See [\`${PROBLEM_NAME}.py\`](./${PROBLEM_NAME}.py)
EOF

# Git operations
git add .
git commit -m "Add solution: $PROBLEM_NAME ($TODAY)"

echo "Solution added successfully!"
echo "Don't forget to push: git push origin main"
