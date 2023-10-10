import os from 'os';
import si, {Systeminformation} from 'systeminformation';

async function logSystemInfo() {
    console.log('Operating system:', process.env.OS);
    console.log('Architecture:', process.env.PROCESSOR_ARCHITECTURE);
    console.log('Current user name:', process.env.USERNAME);
    console.log('CPU cores models:', os.cpus().map(value => value.model));
    console.log('CPU temperature:', await si.cpuTemperature());

    console.log('Graphic controllers\' vendors and models:');
    const graphicsInfo = await si.graphics();
    graphicsInfo.controllers.forEach(value => {
        console.log('Vendor:', value.vendor);
        console.log('Model:', value.model);
    });
    console.log();

    console.log('Total memory, used memory, free memory in GB:');
    const memoryInfo = await si.mem();
    const bytesCountInGb = 1024 ** 3;
    const totalMemoryInGb = (memoryInfo.total / bytesCountInGb);
    const usedMemoryInGb = (memoryInfo.used / bytesCountInGb);
    const freeMemoryInGb = (memoryInfo.free / bytesCountInGb);
    console.log('Total:', totalMemoryInGb.toPrecision(3));
    console.log('Used:', usedMemoryInGb.toPrecision(3));
    console.log('Free:', freeMemoryInGb.toPrecision(3));
    console.log();

    console.log('Data about battery:');
    const batteryInfo = await si.battery();
    console.log('Is charging:', batteryInfo.isCharging);
    console.log('Percent:', batteryInfo.percent);
    console.log('Remaining time:', batteryInfo.timeRemaining);

    console.log();
}

export default {logSystemInfo};
