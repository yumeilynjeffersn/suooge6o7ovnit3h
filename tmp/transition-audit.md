# Centralized Transition System - Final Documentation

## Overview

This document describes the centralized CSS transition system implemented to ensure synchronous theme switching across the entire SvelteKit application.

## Problem Solved

Previously, duplicate and conflicting transition declarations in component-scoped CSS were causing:
- Desynchronized theme transitions (some elements animating at different speeds)
- One-directional animations (only working light→dark, not dark→light)
- Specificity conflicts between global and component CSS
- Inconsistent timing across the application

## Architecture

### Single Source of Truth: `src/routes/layout.css`

```css
:root {
	--transition-base-duration: 270ms;
	--transition-base-timing: ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
	:root {
		--transition-base-duration: 0ms;
		--transition-base-timing: linear;
	}
}
```

All timing values originate from these CSS variables, ensuring consistency.

### CSS Variable Registration with @property

```css
@property --clr-bg {
	syntax: '<color>';
	inherits: true;
	initial-value: #0e0f0c;
}
/* ...9 total color variables registered... */
```

Registered color variables enable browser-native color interpolation during theme transitions.

### Global Transition Rules

**Target elements** (from `layout.css`):
```css
body {
	transition-property: background-color, color;
	transition-duration: var(--transition-base-duration);
	transition-timing-function: var(--transition-base-timing);
}

a, button {
	transition-property: background-color, color, border-color;
	transition-duration: var(--transition-base-duration);
	transition-timing-function: var(--transition-base-timing);
}

input, textarea, select {
	transition-property: background-color, color, border-color;
	transition-duration: var(--transition-base-duration);
	transition-timing-function: var(--transition-base-timing);
}
```

### Utility Classes

For elements not covered by global tag selectors:

```css
.tt-surface {
	transition-property: background-color, border-color;
	transition-duration: var(--transition-base-duration);
	transition-timing-function: var(--transition-base-timing);
}

.tt-text {
	transition-property: color;
	transition-duration: var(--transition-base-duration);
	transition-timing-function: var(--transition-base-timing);
}

.tt-interactive {
	transition-property: background-color, color, border-color;
	transition-duration: var(--transition-base-duration);
	transition-timing-function: var(--transition-base-timing);
}
```

## Component Guidelines

### ✅ DO:

1. **Declare only `transition-property`** in component CSS:
   ```css
   .my-element {
       transition-property: border-color, transform;
       /* duration and timing inherited from global rules */
   }
   ```

2. **Use utility classes** for elements with theme colors:
   ```svelte
   <div class="tt-surface rounded-lg border">
   ```

3. **Document intentional exceptions** with comments:
   ```css
   .hero-image {
       transition-duration: 500ms; /* intentional: slower for dramatic effect */
   }
   ```

### ❌ DON'T:

1. **Never declare duration/timing in components**:
   ```css
   /* BAD - creates specificity conflicts */
   .my-element {
       transition-duration: var(--transition-base-duration);
       transition-timing-function: var(--transition-base-timing);
   }
   ```

2. **Avoid conditional transitions on state selectors**:
   ```css
   /* BAD - only animates one direction */
   .dark .icon {
       transition-property: color;
   }
   
   /* GOOD - animates both directions */
   .icon {
       transition-property: color;
   }
   ```

## Intentional Exceptions

Some transitions deliberately deviate from the 270ms standard:

### 1. Scroll Reveal Animation (650ms)
**File**: `layout.css`
```css
.reveal {
	transition-duration: 650ms; /* intentional: dramatic entrance */
}
```
**Reason**: Page entrance animations should be slower for impact.

### 2. Image Zoom Effects (500ms)
**Files**: `Gallery.svelte`, `News.svelte`
```css
.gallery-item img {
	transition-duration: 500ms; /* intentional: slower zoom for better visual effect */
}
```
**Reason**: Image transformations look smoother with longer duration.

### 3. Hero Feature Blocks (500-1000ms)
**File**: `FeatureBlocks.svelte`
```css
/* Various hero animations: 500ms, 650ms, 800ms, 1000ms */
```
**Reason**: Large hero blocks need cinematic timing for high-impact experience.

## Files Modified

### Phase 1: CSS Variable Registration
- `src/routes/layout.css` - Added @property declarations
- All components - Removed component-scoped color transitions

### Phase 2: Centralized System
- `src/routes/+layout.svelte` - Removed app.css import
- `src/routes/layout.css` - Created utility classes, refined selectors, added prefers-reduced-motion
- `src/lib/components/Controls.svelte` - Fixed bidirectional icon transition
- `src/lib/components/Contacts.svelte` - Removed duplicate declarations
- `src/lib/components/Footer.svelte` - Removed duplicate declarations
- `src/lib/components/Gallery.svelte` - Removed duplicates, marked exception
- `src/lib/components/Header.svelte` - Removed all duplicate declarations
- `src/lib/components/Hero.svelte` - Removed duplicate declarations
- `src/lib/components/News.svelte` - Removed duplicates, marked exception
- `src/lib/components/Services.svelte` - Removed duplicate declarations
- `src/lib/components/Team.svelte` - Removed duplicate declarations
- `src/lib/components/ServiceCatalog.svelte` - Removed duplicate declarations

## Browser Support

- **@property**: Chrome 85+, Firefox 128+, Safari 16.4+
- **Graceful degradation**: Older browsers get instant color changes (acceptable fallback)

## Verification

```bash
# No duplicate duration/timing in components:
grep -r "transition-duration: var(--transition-base-duration)" src/lib/components/
# Should return: no results

grep -r "transition-timing-function: var(--transition-base-timing)" src/lib/components/
# Should return: no results

# Build should pass:
pnpm build
```

## Accessibility

The system respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
	:root {
		--transition-base-duration: 0ms;
		--transition-base-timing: linear;
	}
	
	.reveal {
		transition-duration: 0ms;
		transition-delay: 0ms;
	}
}
```

Users with motion sensitivity preferences get instant transitions.

## Key Takeaways

1. **Component-scoped CSS has higher specificity** than global rules - avoid declaring duration/timing in components
2. **Transitions must be declared on base state**, not conditional states, for bidirectional animation
3. **CSS variable registration is required** for color interpolation in modern browsers
4. **Single source of truth** prevents timing inconsistencies and desynchronization
5. **Utility classes > broad tag selectors** for precise control over which elements transition
