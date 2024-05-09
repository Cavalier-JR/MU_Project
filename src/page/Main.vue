<template>
  <div class="home">
    <h1>欢迎来到MulMU：面向多模态数据的遗忘学习系统</h1>
    <p>MulMU（Multi-modal machine unlearning）是一个创新的系统，旨在处理和遗忘多模态数据中的敏感信息，同时保持模型的准确性。</p>
    <h2>系统功能</h2>
    <div class="features">
      <div class="feature-section">
        <h3>个人端功能</h3>
        <ul>
          <li><i class="fas fa-image"></i> 图片类别遗忘：忘记特定类别的图片，例如将猫类别的图片视为其他动物。</li>
          <div class="image-container">
            <img src="../assets/Tom.png" alt="示例图片" />
            <img src="../assets/dog.png" alt="示例图片" />
          </div>
          <li><i class="fas fa-cut"></i> 图片部分遗忘：忘记图片中的特定内容。</li>
          <li><i class="fas fa-file-alt"></i> 文本遗忘：忘记文本中的特定信息，例如电话号码。</li>
          <img src="../assets/textshow.png" alt="示例图片" style="max-width: 500px; height: auto;" />
        </ul>
      </div>
      <div class="feature-section">
        <h3>公司端功能</h3>
        <ul>
          <li><i class="fas fa-clipboard-list"></i> 遗忘记录：查看用户对模型进行的遗忘操作记录。</li>
          <li><i class="fas fa-shield-alt"></i> 投毒防护：保护模型不受恶意数据影响。</li>
          <li><i class="fas fa-tools"></i> 优化建议-部分遗忘：提供针对部分遗忘的优化建议。</li>
          <li><i class="fas fa-tools"></i> 优化建议-类别遗忘：提供针对类别遗忘的优化建议。</li>
          <li><i class="fas fa-tools"></i> 优化建议-文本遗忘：提供针对文本遗忘的优化建议。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script setup area can be used for importing components or defining component logic
</script>

<style scoped>
.home {
  /* font-family: 'Arial', sans-serif; */
  color: #333;
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* .home h1 {
  color: #2c3e50;
  margin-bottom: 40px; /* Increased margin-bottom from 20px to 40px */
/* } */ 

.home h1 {
  background-color: #f2f2f2;
  color: black;
  padding: 8px;
  font-size: 50px;
  font-family:'社会体';
  text-align: center;
}

.home h2 {
  color: #2c3e50;
  margin-top: 20px; /* Added margin-top for additional spacing if needed */
  font-size: 50px;
  font-family: '扁桃体';
  text-align: center;
}

/* .home p {
  margin-bottom: 20px;
} */

.home p {
  font-size: 30px;
  font-family: '扁桃体';
}

.image-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.image-container img {
  width: 49%; /* Adjust width to fit two images within the container */
  height: auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.feature-section {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* .feature-section h3 {
  color: #2c3e50;
  margin-bottom: 10px;
} */

.feature-section h3 {
  font-size: 30px;
  font-family: '扁桃体';
}

.home ul {
  list-style-type: none;
  padding: 0;
}

.home li {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 16px;
}

.home li i {
  margin-right: 5px;
  color: #3498db;
}
</style>