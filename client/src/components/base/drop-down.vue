<template>
    <el-col :span="8">
        <span class="demonstration">click to trigger</span>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                Dropdown List<el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>
                        Action 2
                    </el-dropdown-item>
                    <el-dropdown-item> hello</el-dropdown-item>
                    <el-dropdown-item> hello</el-dropdown-item>
                    <el-dropdown-item> hello</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-col>
</template>