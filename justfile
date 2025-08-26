# Clean all cache and generated files
clean:
  -rm -rf .data
  -rm -rf .nuxt
  -rm -rf .output
  -rm -rf node_modules

# Format code
format:
  biome format --fix

# Check code
check:
  biome check --fix

# Lint code
lint:
  biome lint --fix