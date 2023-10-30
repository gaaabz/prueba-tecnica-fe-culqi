<script setup lang="ts"></script>

<template>
    <div class="loading__table">
        <div class="loading__table-col loading__table-col--grow-2">
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
            <div class="circle-rectangle">
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="loading__table-col">
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
        </div>
        <div class="loading__table-col">
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
        </div>
        <div class="loading__table-col">
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
        </div>
        <div class="loading__table-col">
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
        </div>
        <div class="loading__table-col">
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="loading__table-col">
            <div class="rectangle-circle">
                <span></span>
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
            <div class="rectangle">
                <span></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loading__table {
    @apply flex w-full;

    .loading__table-col {
        @apply flex-grow;

        &--grow-2 {
            @apply flex-grow-[2];
        }

        & > *:not(:first-child) {
            @apply border-b border-b-gray-100 py-5;
        }

        & > *:first-child {
            @apply bg-gray-50;

            span {
                @apply bg-gray-100;
            }
        }

        &:first-child > *:first-child {
            @apply rounded-tl-[10px] rounded-bl-[10px];
        }

        &:last-child > *:last-child {
            @apply rounded-tr-[10px] rounded-br-[10px];
        }
    }

    .circle-rectangle {
        @apply flex justify-between items-center gap-[10px] py-[18px] px-4;

        span {
            @apply block bg-gray-50 rounded-full h-5;

            &:first-child {
                @apply w-5;
            }

            &:last-child {
                @apply flex-grow flex-shrink;
            }
        }
    }

    .rectangle-circle {
        @apply flex justify-between items-center gap-[10px] py-[18px] px-4;

        span {
            @apply block bg-gray-50 rounded-full h-5;

            &:first-child {
                @apply flex-grow flex-shrink;
            }

            &:last-child {
                @apply w-5;
            }
        }
    }

    .rectangle {
        @apply flex justify-between items-center py-[18px] px-4;

        span {
            @apply block bg-gray-50 rounded-full h-5 flex-grow flex-shrink;
        }
    }
}
</style>
