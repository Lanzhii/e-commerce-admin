<template>
  <div>
    <el-dialog
      :title="title"
      :visible="open"
      width="30%"
      :before-close="dialogClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="角色" prop="character">
          <el-select v-model="ruleForm.character" class="sw">
            <el-option label="业务人员" value="1"></el-option>
            <el-option label="审核人员" value="2"></el-option>
            <el-option label="风控经理" value="3"></el-option>
            <el-option label="管理员" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <el-form-item label="创建原因" prop="reason">
          <el-input type="textarea" v-model="ruleForm.reason"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogClose">取 消</el-button>
        <el-button type="primary" @click="ok"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
      return {
        ruleForm: {
          character:'',
          remark:'',
          reason:''
        },
        rules: {
          character: [
            { required: true, message: '请选择角色', trigger: 'blur' }
          ],
          remark: [
            { required: true, message: '请输入备注', trigger: 'blur' }
          ],
           reason: [
            { required: true, message: '请输入创建原因', trigger: 'blur' }
          ],
        },
        closeData:false
      };
    },
  props: {
    open: {
      require: true,
      type: Boolean,
    },
    title:{
        require:true,
        type:String
    }
  },
  computed:{
    ...mapState(['rowData'])
  },
  watch:{
    open(){
      const {character,remark,reason}=this.rowData
      this.ruleForm={character,remark,reason}
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      dialogClose(){
          this.$emit('del')
      },
      ok(){
        //发送axios请求
        this.dialogClose()
      }
  },
};
</script>

<style lang="scss" scoped>
</style>