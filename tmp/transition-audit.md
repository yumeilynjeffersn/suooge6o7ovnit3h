# Transition Audit Checklist - COMPLETED ✅

## Summary

- Total occurrences: 71
- New token: `--transition-base: 350ms cubic-bezier(0.4, 0, 0.2, 1)`
- All updates completed successfully

## Files Updated

### src/app.css

- [x] Line 20: Deprecated marker added to old --transition variable
- [x] Line 68: Updated to use transition-property/duration pattern
- [x] Line 113: Updated to use var(--transition-base)

### src/routes/layout.css (MAIN FILE)

- [x] Added --transition-base token (350ms cubic-bezier)
- [x] Added @utility transition-base for Tailwind
- [x] Added prefers-reduced-motion support
- [x] Lines 100-103: Updated structural elements
- [x] Lines 109-113: Updated interactive elements
- [x] Lines 120-123: Updated form elements
- [x] Line 180: Updated reveal animation (intentionally 650ms)
- [x] Line 225: Updated button transition

### src/lib/components/Contacts.svelte

- [x] Lines 52, 66: Added transition-base class
- [x] Line 170: Updated to use var(--transition-base)

### src/lib/components/Controls.svelte

- [x] All transition properties updated to use var(--transition-base)
- [x] Lines 90, 116-118, 131, 164-166: All updated

### src/lib/components/FeatureBlocks.svelte

- [x] Lines 47, 56, 62, 71, 80, 87: KEPT custom durations (500-1000ms) - documented as intentional hero animations
- [x] Added HTML comments documenting the intentional long durations

### src/lib/components/Footer.svelte

- [x] Lines 32, 41, 42, 50: All added transition-base class

### src/lib/components/Gallery.svelte

- [x] Line 74: Updated to transition-property/duration pattern (500ms kept for effect)
- [x] Line 83: Updated to use var(--transition-base)

### src/lib/components/Header.svelte

- [x] Line 50: Added transition-base class
- [x] Lines 69-71: Added transition-base to burger menu
- [x] Lines 79-82: Updated to use var(--transition-base)
- [x] Line 117: Updated mobile menu transition

### src/lib/components/Hero.svelte

- [x] Line 122: Updated to use var(--transition-base)

### src/lib/components/News.svelte

- [x] Lines 93-95: Updated card transition
- [x] Line 108: Updated (500ms kept for image effect)
- [x] Line 127: Updated to use var(--transition-base)

### src/lib/components/Services.svelte

- [x] Lines 61-63: Updated to use var(--transition-base)

### src/lib/components/ServiceCatalog.svelte

- [x] Lines 238-241: Updated service card transition
- [x] Lines 251, 259, 267: All updated to use var(--transition-base)

### src/lib/components/Team.svelte

- [x] Lines 66-68: Updated to use var(--transition-base)

## Intentional Exceptions (Documented)

### FeatureBlocks.svelte

- **Lines 47, 56, 62, 71, 80, 87**: Duration values 500-1000ms
- **Reason**: These are large hero image blocks with dramatic hover effects. The slower timing creates a cinematic, high-impact experience appropriate for featured content.
- **Status**: Kept with HTML comments for future maintainers

### Gallery.svelte & News.svelte

- **Image zoom transitions**: 500ms
- **Reason**: Smoother visual effect for large images

### layout.css - .reveal animation

- **Duration**: 650ms
- **Reason**: Page entrance animation, intentionally slower for impact

## Acceptance Criteria Results

1. ✅ `grep -rn "duration-[0-9]" src/` - Only FeatureBlocks with documented exceptions
2. ✅ `grep -rn "ease-in-out|ease-out|ease-in" src/` - No results in Tailwind classes
3. ✅ All CSS transitions use var(--transition-base) or proper transition-property/duration pattern
4. ✅ prefers-reduced-motion support added at token level
5. ✅ pnpm run check passes (only known svelte-flickity type warning)

## Token Implementation

**Final value**: `--transition-base: 350ms cubic-bezier(0.4, 0, 0.2, 1);`

**Tailwind utility**:

```css
@utility transition-base {
	transition-duration: 350ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Usage patterns**:

- Tailwind: `transition-colors transition-base`
- CSS: `transition-duration: var(--transition-base);`
- With custom properties: `transition-property: transform, opacity;`
